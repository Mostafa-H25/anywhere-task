import { Injectable } from '@nestjs/common';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { UpdateQuizDto } from './dto/update-quiz.dto';
import { Quiz } from './entities/quiz.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private quizRepository: Repository<Quiz>,
  ) {}
  async create(createQuizDto: CreateQuizDto) {
    // get user data from jwt token
    const dummyUser = {
      id: 0,
    };
    createQuizDto.title = createQuizDto.title.trim().toLowerCase();
    createQuizDto.course = createQuizDto.course.trim().toLowerCase();
    createQuizDto.topic = createQuizDto.topic.trim().toLowerCase();
    createQuizDto.command = createQuizDto.command.trim().toLowerCase();
    await this.quizRepository.save(
      this.quizRepository.create({
        createdBy: dummyUser,
        ...createQuizDto,
        createdAt: new Date(),
      }),
    );
    return 'This action adds a new quiz';
  }

  async findAll() {
    const quizzes = await this.quizRepository.find({
      select: {
        id: true,
        title: true,
        type: true,
        course: true,
        topic: true,
        command: true,
        due: true,
      },
      relations: { createdBy: true },
    });
    return quizzes;
  }

  async findOne(id: number) {
    const quiz = await this.quizRepository.findOne({
      where: {
        id,
      },
      select: {
        id: true,
        title: true,
        type: true,
        course: true,
        topic: true,
        command: true,
        due: true,
      },
    });
    return quiz;
  }

  update(id: number, updateQuizDto: UpdateQuizDto) {
    return `This action updates a #${id} quiz`;
  }

  async remove(id: number) {
    // get user data from jwt token to confirm identity if user and task user are identical
    await this.quizRepository.delete({ id });
    return `This action removes a #${id} quiz`;
  }
}
