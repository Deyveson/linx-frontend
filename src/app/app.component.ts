import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  ngOnInit(): void {
    this.qtdproducts = this.products.length;
  }
  products = [
    {
      id: "476735KgLNC3644",
      title: "Oferta Padrao de base Teste - 476735KgLNC3644",
      img: "http://busca-images.neemu.com/neemu_chaordic.png",
      status: "available",
      price: 193.99,
      sPrice: 174.59
    },
    {
      id: "380835KgLNC3711",
      title: "Oferta Padrao de base Teste - 380835KgLNC3711",
      img: "http://busca-images.neemu.com/linx.jpg",
      status: "available",
      price: 760,
      sPrice: 684
    },
    {
      id: "167635KgLNC11321",
      title: "Oferta Padrao de base Teste - 167635KgLNC11321",
      img: "http://busca-images.neemu.com/neemu_chaordic.png",
      status: "available",
      price: 1323.99,
      sPrice: 1191.59
    },
    {
      id: "371435KgLNC3637",
      title: "Oferta Padrao de base Teste - 371435KgLNC3637",
      img: "http://busca-images.neemu.com/linx.jpg",
      status: "available",
      price: 1698.99,
      sPrice: 1529.09
    },
    {
      id: "51135KgLNC1138",
      title: "Oferta Padrao de base Teste - 51135KgLNC1138",
      img: "http://busca-images.neemu.com/linx.jpg",
      status: "available",
      price: 367.99,
      sPrice: 331.19
    },
    {
      id: "124835KgLNC9487",
      title: "Oferta Padrao de base Teste - 124835KgLNC9487",
      img: "http://busca-images.neemu.com/neemu_chaordic.png",
      status: "available",
      price: 1453.99,
      sPrice: 1308.59
    },
    {
      id: "282135KgLNC3682",
      title: "Oferta Padrao de base Teste - 282135KgLNC3682",
      img: "http://busca-images.neemu.com/linx.jpg",
      status: "available",
      price: 805,
      sPrice: 724.5
    },
    {
      id: "126235KgLNC3501",
      title: "Oferta Padrao de base Teste - 126235KgLNC3501",
      img: "http://busca-images.neemu.com/logo_busca.png",
      status: "available",
      price: 334,
      sPrice: 300.6
    }
  ]
  qtdproducts = 0;
  title = 'linx-frontend';

  termIsExist(text: any){
    if(text.length > 0){
      return this.products = this.products.filter(prod => {
        return prod.title.toLowerCase().includes(text.toString().toLowerCase())
      })
    }
    return this.products;
  }

  //Realizar as chamadas da API
}
