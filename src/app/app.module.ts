import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { OfferComponent } from './offer/offer.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ProductsComponent } from './products/products.component';
import { CounterComponent } from './counter/counter.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BoxComponent } from './box/box.component';
import { BoxBelowComponent } from './box-below/box-below.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    BlogComponent,
    OfferComponent,
    TestimonialComponent,
    ProductsComponent,
    CounterComponent,
    GalleryComponent,
    BoxComponent,
    BoxBelowComponent,
    AboutComponent,
    HeaderComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
