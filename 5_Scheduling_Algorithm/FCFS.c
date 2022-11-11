#include<stdio.h>


struct PCB{
int pid, arrivalTime, burstTime, turnaroundTime;
};

void  pline(int);

int main(){
int i,j,num;
float sum=0.0, avg=0.0;
struct PCB p[8], temp;

printf("Enter the no of process: ");
scanf("%d",&num);

// inputing arrival and burst time
for(i=0;i<num;i++){
printf("Enter arrival and burst time of process%d",i+1);
scanf("%d %d",&p[i].arrivalTime, &p[i].burstTime);
p[i].pid=i+1;
}


//sorting processes based on arrival time
for(i=0;i<num-1;i++){
for(int j=0;j<num-i-1;j++){
	if(p[j].arrivalTime > p[j+1].arrivalTime){
		temp=p[j];
		p[j]=p[j+1];
		p[j+1]=p[j];
	}

   }
}


// calculating turnaround time
for(i=0;i<num;i++){
  sum+=p[i].burstTime;
  p[i].turnaroundTime=sum;
}

sum=0.0;

pline(60);

//printing our required output table
printf("PID\t Arrival Time\t Burst Time\t Turnaround Time\n");
pline(60);

for(i=0;i<num;i++){
printf("%d\t%d\t\t%d\t\t%d\t",p[i].pid,p[i].arrivalTime,p[i].burstTime,p[i].turnaroundTime);
sum+=p[i].turnaroundTime;
printf("\n");
}

pline(60);

// Total turnaround time and avg turanaround time
printf("Total Turnaround Time:%.2f",sum);

avg=sum/(float)num;
printf("Average Turnaround Time:%.2f", avg);

return 0;

}



//pline function defination
void pline(int x)
{
int i;
for(i=0;i<x;i++){
	printf("-");

 }

printf("\n");

} 



