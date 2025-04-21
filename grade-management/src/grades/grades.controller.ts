import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GradesService } from './grades.service';
import { CreateGradeDto } from './dto/create-grade.dto';
import { UpdateGradeDto } from './dto/update-grade.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Grade } from './entities/grade.entity';

@ApiTags('Grades')
@Controller('grades')
export class GradesController {
  constructor(private readonly gradesService: GradesService) {}

  @Post()
  @ApiOperation({ 
    summary: 'Create a new grade',
    description: 'Creates a new grade record after validating that the student and subject belong to the same grade level'
  })
  @ApiBody({ type: CreateGradeDto })
  @ApiResponse({ status: 201, description: 'Grade created successfully', type: Grade })
  @ApiResponse({ status: 404, description: 'Student or Subject not found' })
  @ApiResponse({ status: 409, description: 'The subject is not valid with respect to the student\'s grade level' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  create(@Body() createGradeDto: CreateGradeDto) {
    return this.gradesService.create(createGradeDto);
  }

  @ApiOperation({ 
    summary: 'Get all grades',
    description: 'Retrieves all grades with their associated student and subject information' 
  })
  @ApiResponse({  status: 200, description: 'List of all grades', type: [Grade] })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get()
  findAll() {
    return this.gradesService.findAll();
  }

  @ApiOperation({ 
    summary: 'Get a grade by ID',
    description: 'Retrieves a specific grade with its associated student and subject information' 
  })
  @ApiParam({ name: 'id',  description: 'Grade ID (UUID)', format: 'uuid' })
  @ApiResponse({ status: 200, description: 'Grade found', type: Grade })
  @ApiResponse({ status: 404, description: 'Grade not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gradesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ 
    summary: 'Update a grade',
    description: 'Updates an existing grade record.' 
  })
  @ApiParam({ name: 'id', description: 'Grade ID (UUID)', format: 'uuid' })
  @ApiBody({ type: UpdateGradeDto })
  @ApiResponse({ status: 200, description: 'Grade updated successfully', type: Grade })
  @ApiResponse({ status: 400, description: 'Invalid data provided' })
  @ApiResponse({ status: 404, description: 'Grade not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  update(@Param('id') id: string, @Body() updateGradeDto: UpdateGradeDto) {
    return this.gradesService.update(id, updateGradeDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a grade', description: 'Permanently removes a grade record' })
  @ApiParam({ name: 'id', description: 'Grade ID (UUID)', format: 'uuid' })
  @ApiResponse({ status: 204, description: 'Grade deleted successfully' })
  @ApiResponse({ status: 404, description: 'Grade not found' })
  @ApiResponse({ status: 500, description: 'Internal server error' })
  remove(@Param('id') id: string) {
    return this.gradesService.remove(id);
  }
}
