import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatService } from './services/chat.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pc-chat';

  constructor(private chatService: ChatService, 
    private toastrService: ToastrService) {}

  ngOnInit(): void {
    this.chatService.start();
    this.toastrService.success("Successfully connected", "SignalR")
  }
}
