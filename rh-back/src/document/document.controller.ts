import { Controller, Get, Post, Body, Patch, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { DocumentService } from './document.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { AddSignatureDocDto } from './dto/add-signature.document';
import { DocumentVersionDto } from './dto/create-document-version';
import { AddCommentDto } from './dto/add-comment.documement.dto';
import { AddTagDocumentDto } from './dto/add-tag-document';

@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Post()
  create(@Body() createDocumentDto: CreateDocumentDto) {
    return this.documentService.create(createDocumentDto);
  }

  @Get()
  findAll() {
    return this.documentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentDto: UpdateDocumentDto) {
    return this.documentService.update(+id, updateDocumentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentService.remove(+id);
  }
  @Patch(':id/signature')
  addSignatureToDocument(@Param('id',ParseIntPipe) id:number,@Body() signature:AddSignatureDocDto){
    console.log({signature})
    return this.documentService.addSignatureToDocument(id,signature);
  }
  @Get(':id/versions')
  getDocumentVersions(@Param('id',ParseIntPipe) id:number){
    
    return this.documentService.getDocumentVersions(id)
  }
  @Post(':id/versions')
  createDocumentVersions(@Param('id',ParseIntPipe) id:number,@Body() documentVersion:DocumentVersionDto){
    
    return this.documentService.createDocumentVersion({
      ...documentVersion,
      documentId:id
    })
  }
  @Post(':id/comments')
  createDocumentComment(@Param('id',ParseIntPipe) id:number,@Body() documentComment:AddCommentDto){
    
    return this.documentService.addComment({
      documentId:id,
      userId:documentComment.userId,
      comment:documentComment.comment
    });
  }
  @Get(':id/tags')
  getDocumentTags(@Param('id',ParseIntPipe) id:number){
    
    return this.documentService.getTags(id);
  }
  @Patch(':id/tags')
  addDocumentTags(@Param('id',ParseIntPipe) id:number,@Body() docuementTag:AddTagDocumentDto){
    
    return this.documentService.addTagToDocument({documentId:id,name:docuementTag.name});
  }

}
