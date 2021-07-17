import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'src/app/_services/dataStore.service';

@Component({
  selector: 'app-template-header',
  templateUrl: './template-header.component.html',
  styleUrls: ['./template-header.component.scss']
})
export class TemplateHeaderComponent implements OnInit {

  constructor(private dataStoreService: DataStoreService) { }

  ngOnInit(): void {
  }

}
