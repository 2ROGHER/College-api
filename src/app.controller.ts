import {
  Controller,
  Get,
  Param,
  Res,
  Req,
  Header,
  Post,
  HttpCode,
  Redirect,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CatService } from './cat.service';

@Controller('home')
export class AppController {
  private catService: CatService;

  // constructor(private readonly _appService: AppService, catService: CatService) {
  //   this.catService = catService; // This is the larger method to inject the service CatService to this constructor.
  // }

  constructor(
    private readonly _appService: AppService, // Declare and initialize this service at only line
    private readonly _catService: CatService,
  ) {}
  @Get()
  getHello(): string {
    return this._appService.getHello();
  }

  @Get('favorites')
  getFavorites(@Res() res): string {
    return res.status(200).send(this._appService.getFavorites());
    // return this._appService.getFavorites();
  }

  @Get('items/:id')
  getItems(@Res() res, @Param() params, @Req() requests: Request): string {
    return res.status(200).send('items are ' + params.id + ', header name is ');
  }

  @Post('new')
  @HttpCode(201)
  @Header('Cache-Control', 'no-store') // no-cache stores here.
  create(@Res() res): string {
    return res.redirect('http://localhost:8080/home/created-new-item');
  }

  @Get('allend/*')
  @Redirect('http://localhost:8080/fake-item', 200)
  getAllEnd(@Param() params): string {
    return 'all end is ' + params[0];
  }
}
