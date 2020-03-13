import { Component } from '@angular/core';

@Component({
	selector: 'app-app-grocery',
  templateUrl: './app-grocery.component.html',
	styleUrls: [
        '../../assets/css/bootstrap.min.css','./app-grocery.component.css'
    ]
})

export class AppGroceryComponent {
    task = {
      name: '',
      id: 0
    };
    tasks = [];

    onClick(){
      
      if(this.task.id == 0){
        //this.task.name.toLowerCase();
        if (this.itemExists(this.task.name)) {
            alert('This item already exists in your list');
            return;
        }
        this.tasks.push({id: (new Date()).getTime(),name: this.task.name, strike: false});
      }
      
      this.task = {
        name: '',
        id: 0
      };
      
    }
    itemExists(itemName){
      
      for(var i = 0;i < this.tasks.length; i++){
        if(itemName.toLowerCase() == this.tasks[i].name){
          return true;
        }
      }
      return false;
      
    }

    onSortClick(){
      // this.tasks = this.tasks.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      this.tasks = this.tasks.sort((a, b) => a.name.localeCompare(b.name))
    }
    onEdit(item){
      this.task = item;
    }

    onDelete(item){
      for(var i = 0;i < this.tasks.length; i++){
        if(item.id == this.tasks[i].id){
          this.tasks.splice(i,1);
          break;
        }
      }
    }

    // onStrike(item){
    //   for(var i = 0;i < this.tasks.length; i++){
    //     if(item.id == this.tasks[i].id){
    //       if(this.tasks[i].strike){
    //         this.tasks[i].strike = false;
    //       }
    //       else{
    //         this.tasks[i].strike = true;
    //       }
    //       break;
    //     }
    //   }
    // }

  
}
