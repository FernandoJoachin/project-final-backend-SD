import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { CreateSubjectDto } from './dto/create-subject.dto';
import { UpdateSubjectDto } from './dto/update-subject.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Subject } from './entities/subject.entity';

@ApiTags('Subjects')
@Controller('subjects')
export class SubjectsController {
  constructor(private readonly subjectsService: SubjectsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new subject' })
  @ApiBody({ type: CreateSubjectDto })
  @ApiResponse({ status: 201, description: 'Subject created', type: Subject })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 409, description: 'Subject name already exists' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() createSubjectDto: CreateSubjectDto) {
    return this.subjectsService.create(createSubjectDto);
  }

  @ApiOperation({ summary: 'Get all subjects' })
  @ApiResponse({ status: 200, description: 'List of subjects', type: [Subject] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get()
  findAll() {
    return this.subjectsService.findAll();
  }

  @ApiOperation({ summary: 'Get a subject by ID' })
  @ApiParam({ name: 'id', description: 'Subject ID', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Subject found', type: Subject })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update an existing subject' })
  @ApiParam({ name: 'id', description: 'Subject ID', format: 'uuid' })
  @ApiBody({ type: UpdateSubjectDto })
  @ApiResponse({ status: 200, description: 'Subject updated', type: Subject })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param('id') id: string, @Body() updateSubjectDto: UpdateSubjectDto) {
    return this.subjectsService.update(id, updateSubjectDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a subject' })
  @ApiParam({ name: 'id', description: 'Subject ID', format: 'uuid' })
  @ApiResponse({ status: 204, description: 'Subject deleted' })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  remove(@Param('id') id: string) {
    return this.subjectsService.remove(id);
  }
}
