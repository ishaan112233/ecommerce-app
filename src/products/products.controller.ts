import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthenticationGuard } from 'src/auth/auth.guard';
import { Roles } from 'src/constants/decorators/roles.decorator';
import { RolesGuardGuard } from 'src/constants/guards/roles.guard';

@Controller('products')
@UseGuards(AuthenticationGuard, RolesGuardGuard)
export class ProductsController {
  @Get()
  @Roles('ADMIN', 'SELLER', 'SUPPORTER', 'CUSTOMER')
  getData() {
    return { message: 'Products sent successfully' };
  }

  @Post()
  @Roles('ADMIN', 'SELLER')
  saveNewProduct() {
    return { message: 'Products sent successfully' };
  }

  @Put()
  @Roles('ADMIN', 'SELLER')
  updateProductDetails() {
    return -{ message: 'Product updated successfully' };
  }

  @Delete()
  @Roles('ADMIN', 'SUPPORTER')
  deleteProductDetails(@Body() body: { productId: string }) {
    return { message: 'Product deleted successfully' };
  }
}
