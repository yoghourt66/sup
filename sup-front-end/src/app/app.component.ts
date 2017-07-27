import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <header class="head">
        <h1>sup</h1>
        <!--<img [src]="src/app/img/headshot5.jpg" alt="头像"/>-->
        <nav>
            <ul>
                <li>个人管理</li>
                <li>笔记</li>
                <li>作品集</li>
            </ul>
        </nav>
    </header>
    
    <div id="content">
        <div class="section">
            <h4>个人管理</h4>
            <a><img src="{{manager}}" alt="个人管理加载失败"/></a>
        </div>
        
        <div class="section">
            <h3>笔记</h3>
            <a><img src="{{notes}}" alt="笔记失败"/></a>
        </div>
        
        <div class="section">
            <h3>作品集</h3>
            <a><img src="{{works}}" alt="作品集失败"/></a>
        </div>
    </div>
    
    <footer class="foot">
        COPYRIGHT@yoghourt
    </footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sup';
  
  manager = "http://img5.imgtn.bdimg.com/it/u=4233531470,1753260751&fm=26&gp=0.jpg";
  notes = "http://img5.imgtn.bdimg.com/it/u=4233531470,1753260751&fm=26&gp=0.jpg";
  works = "http://img5.imgtn.bdimg.com/it/u=4233531470,1753260751&fm=26&gp=0.jpg";
}
