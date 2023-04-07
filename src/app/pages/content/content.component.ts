import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg';
  contentTitle: string = 'Título da notícia';
  contentDescription: string = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat adipisci
  laborum doloremque repellat nobis repellendus maxime non nesciunt magnam,
  dolorum eum officia delectus labore natus, tenetur sint sunt, facilis
  illo.`;

  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => (this.id = value.get('id')));
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter((article) => article.id == id)[0];

    this.contentDescription = result.description;
    this.contentTitle = result.title;
    this.photoCover = result.photo;
  }
}
