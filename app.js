new Vue({
   el:'#app',
    data:{
        playerHealth:100,
        monsterHealth:100,
        isGameOn:false,
        count:0,
        monAttack:0,
        playAttack:0,
        isShowLog:false
    },
    methods:{
        startGame:function(){
            this.isGameOn=true;
            this.isShowLog=false;
            this.playerHealth=100;
            this.monsterHealth=100;
            this.count=0;
        },
        attack:function(){
           if(this.playerHealth<=0){
             let con=confirm('You lose!, you want to play again?');
             if(con){
               this.startGame();
             }else{
               this.startGame();
               this.isGameOn=false;
             }
             return;
           }
           if(this.monsterHealth<=0){
             let con=confirm('You win!, you want to play again?');
             if(con){
               this.startGame();
             }else{
               this.startGame();
               this.isGameOn=false;
             }
             return;
           }
            this.playAttack=this.attckFunction(10,3)
           this.monsterHealth -=this.playAttack
           if(this.monsterHealth<=0){
             this.monsterHealth=0;
           }
           this.monAttack=this.attckFunction(10,3);
           this.playerHealth -= this.monAttack;
           if(this.playerHealth<=0){
             this.playerHealth=0;
           }
           this.isShowLog=true;
        },
        specialAttack:function(){
          this.count++;
          if(this.count>3){
            alert('You used all special attack move!');
            return;
          }
          if(this.playerHealth<=0){
            alert('You lose!')
            return;
          }
          if(this.monsterHealth<=0){
            alert('You win');
            return;
          }
          this.playAttack=this.attckFunction(14,8);
          this.monsterHealth -=this.playAttack;
           this.monAttack=this.attckFunction(10,3);
          this.playerHealth -= this.monAttack;
          this.isShowLog=true;
        },
        heal:function(){
          if(this.playerHealth> 0 && this.playerHealth<100 && this.monsterHealth>0){
            this.playerHealth +=this.attckFunction(6,3);
            this.monsterHealth +=this.attckFunction(8,3);
          }else {
            return;
          }

        },
        giveUp:function(){
          if(this.playerHealth==100 || this.monsterHealth==100 || this.playerHealth==0 || this.monsterHealth==0 ){
            return;
          }
          if(this.playerHealth<this.monsterHealth){
            if (confirm("Are you sure?")) {
                this.startGame();
               } else {
                 return;
              }
          }else{
            var a=confirm('You are winning,Are you sure to giveup? ')
            if(a){
              this.startGame();
              this.isGameOn=false;
            }
          }
        },
        attckFunction:function(max,min){
          return Math.max(Math.floor(Math.random() * max),min);
        }
    }

});
