export class Game{
    constructor(num){
        num=Number(num)
        this.data=[];
        for (let i = 0; i <= num - 1; i++) {
            let sum=0;
            for (let j = 0; j <= num - 1; j++) {
                let number=Math.floor(Math.random() * 9) + 1;
                let isSolution=Math.random()<0.5
                this.data.push({number, isSolution, state: ""});
            if(isSolution==true){
                sum+=number;
            }
            }
            this.data.push({number: sum})
        }
        for (let i = 0; i < num; i++) {
            let sum=0;
            for (let j = 0; j < num; j++) {
                let el=this.data[j*(num+1)+i];
                if(el.isSolution==true){
                    sum+=el.number;
                }
            }
            this.data.push({number: sum})
        }
      }
}

