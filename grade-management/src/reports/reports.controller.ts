import { Controller, Get, Param, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { IrregularStudentReportResponse, RegularStudentReportResponse, StudentReportResponse, SubjectReportResponse } from './dto/report-responses.dto';

@ApiTags('Reports')
@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('student/:id')
  @ApiOperation({ 
    summary: 'Generate student academic report',
    description: 'Generates a detailed academic report for a specific student including all grades and average score'
  })
  @ApiParam({
    name: 'id',
    description: 'Student ID (UUID)',
    example: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
  })
  @ApiResponse({
    status: 200,
    description: 'Student report generated successfully',
    type: StudentReportResponse
  })
  @ApiResponse({ status: 404, description: 'Student not found' })
  generateStudentReport(@Param('id') id: string) {
    return this.reportsService.generateStudentReport(id);
  }

  @Get('subject/:id')
  @ApiOperation({ 
    summary: 'Generate subject performance report',
    description: 'Generates a report showing all student grades for a specific subject and the class average'
  })
  @ApiParam({
    name: 'id',
    description: 'Subject ID (UUID)',
    example: '3fa85f64-5717-4562-b3fc-2c963f66afa6'
  })
  @ApiResponse({
    status: 200,
    description: 'Subject report generated successfully',
    type: SubjectReportResponse
  })
  @ApiResponse({ status: 404, description: 'Subject not found' })
  generateSubjectReport(@Param('id') id: string) {
    return this.reportsService.generateSubjectReport(id);
  }

  @Get('regular-students')
  @ApiOperation({ 
    summary: 'List students with passing grades',
    description: 'Returns students with no failing grades (all grades ≥ 60) optionally filtered by grade level'
  })
  @ApiQuery({
    name: 'gradeLevel',
    required: false,
    description: 'Filter students by grade level (1-12)',
    type: Number,
    example: 10
  })
  @ApiResponse({
    status: 200,
    description: 'List of regular students',
    type: RegularStudentReportResponse,
    isArray: true
  })
  findRegularStudents(@Query('gradeLevel') gradeLevel?: number) {
    return this.reportsService.findRegularStudents(gradeLevel ? +gradeLevel : undefined);
  }

  @Get('irregular-students')
  @ApiOperation({ 
    summary: 'List students with failing grades',
    description: 'Returns students with at least one failing grade (<60) optionally filtered by grade level'
  })
  @ApiQuery({
    name: 'gradeLevel',
    required: false,
    description: 'Filter students by grade level (1-12)',
    type: Number,
    example: 10
  })
  @ApiResponse({
    status: 200,
    description: 'List of irregular students with failing counts',
    type: IrregularStudentReportResponse,
    isArray: true
  })
  findIrregularStudents(@Query('gradeLevel') gradeLevel?: number) {
    return this.reportsService.findIrregularStudents(gradeLevel ? +gradeLevel : undefined);
  }
}