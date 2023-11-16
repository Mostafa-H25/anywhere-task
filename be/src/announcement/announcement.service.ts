import { Injectable } from '@nestjs/common';
import { CreateAnnouncementDto } from './dto/create-announcement.dto';
import { UpdateAnnouncementDto } from './dto/update-announcement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Announcement } from './entities/announcement.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AnnouncementService {
  constructor(
    @InjectRepository(Announcement)
    private announcementRepository: Repository<Announcement>,
  ) {}

  async create(createAnnouncementDto: CreateAnnouncementDto) {
    // get user data from jwt token
    const dummyUser = {
      id: 0,
    };
    createAnnouncementDto.announcement = createAnnouncementDto.announcement
      .trim()
      .toLowerCase();
    await this.announcementRepository.save(
      this.announcementRepository.create({
        createdBy: dummyUser,
        ...createAnnouncementDto,
        createdAt: new Date(),
      }),
    );
    return 'This action adds a new announcement';
  }

  async findAll() {
    const announcements = await this.announcementRepository.find({
      select: {
        id: true,
        createdBy: {
          title: true,
          firstName: true,
          lastName: true,
          department: true,
          image: true,
        },
        announcement: true,
      },
      relations: { createdBy: true },
    });
    return announcements;
  }

  async findOne(id: number) {
    const announcement = await this.announcementRepository.findOne({
      where: {
        id,
      },
      select: {
        id: true,
        createdBy: {
          title: true,
          firstName: true,
          lastName: true,
          department: true,
          image: true,
        },
        announcement: true,
      },
    });
    return announcement;
  }

  update(id: number, updateAnnouncementDto: UpdateAnnouncementDto) {
    return `This action updates a #${id} announcement`;
  }

  async remove(id: number) {
    // get user data from jwt token to confirm identity if user and task user are identical
    await this.announcementRepository.delete({ id });
    return `This action removes a #${id} announcement`;
  }
}
