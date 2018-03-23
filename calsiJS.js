 
var num=0,ans=0,check='f',count=1;function demo(i){
 	// body...
 		switch(i){
 																//Number Input
 			case 0:
 		  		   num	= num*10+0;								// Zero button
 		           document.getElementById("text").value = num;
                   break;
 			case 1:        										//one button
 		  		   num	= num*10+1;
 		           document.getElementById("text").value = num;
                   break;
 			case 2: 											//two button				
 		  		   num	= num*10+2;
 		           document.getElementById("text").value = num;
                   break;
 			case 3: 										    //three button	
 		  		   num	= num*10+3;
 		           document.getElementById("text").value = num;
                   break;
 			case 4:                                             //four button 
 		  		   num	= num*10+4;
 		           document.getElementById("text").value = num;
                   break;
 			case 5: 											//five button						
 		  		   num	= num*10+5;
 		           document.getElementById("text").value = num;
                   break;
 			case 6:                                             //six button
 		  		   num	= num*10+6;  
 		           document.getElementById("text").value = num;
                   break;
 			case 7:                                             //seven button
 		  		   num	= num*10+7;
 		           document.getElementById("text").value = num;
                   break;
 			case 8: 											//eight button				
 		  		   num	= num*10+8;
 		           document.getElementById("text").value = num;
                   break;
 			case 9: 											//nine button
 		  		   num	= num*10+9;
 		           document.getElementById("text").value = num;
                   break;
                   												//Operation Perform Clear button
 			case 'C':
 				   num=0; 
 				   count=0;
 				   check=' ';
 				   ans=0;
 		           document.getElementById("text").value = " ";
                   break;

 			case '+': 											//plus operation
 					count++;
 					ans=ans+num;
 		           document.getElementById("text").value = "+";
 		           num=0;
 		           check='+';
                   break;

 			case '-': 											//minus operation
 					if(count<=1){
 					if(ans!=0)
 					ans=ans-num;
 				    else
 				    ans=num;	
 					}
 					count++;
 		           document.getElementById("text").value = "-";
 					num=0;
 		           check='-';
                   break;
 			case '*': 											//multiplication operation
 					if(count<=1){
 					if(ans!=0)
 					ans=ans*num;
 				    else
 				    ans=num;	
 					}
 				    check='*';
 					count++;
 		           document.getElementById("text").value = "*";
 					num=0;
                   break;

 			case '/': 											//divide operation
 					if(count<=1){
 					if(ans!=0)
 					ans=ans/num;
 				    else
 				    ans=num;
 				}  
 				    check='/';
 				    count++;
 		           document.getElementById("text").value = "/";
 					num=0;
                   break;

 			case '%': 											//modulus operation			
 					if(count<=1){
 					if(ans!=0)
 					ans=ans%num;
 				    else
 				    ans=num;
 				   }
 				    check='%';
 				   count++;

 		           document.getElementById("text").value = "%";
 					num=0;
                   break;


            case 'del': num=num/10;                          //delete operation
            			num=parseInt(num);
            			document.getElementById("text").value = parseInt(num);
            			break;

 			case '=': 										//equal operation			
 					 switch(check){
 					 	case '+': 
 					 	         ans=ans+num;
 					 	         break;
 					 	case '-': 
 					 	         ans=ans-num;
 					 	         break;
 					 	case '*': 
 					 	         ans=ans*num;
 					 	         break;
 					 	case '/': 
 					 	         ans=ans/num;
 					 	         break;
 					 	case '%': 
 					 	         ans=ans%num;
 					 	         break;

 					 }
 		           document.getElementById("text").value = ans;
 					num=0;
                   break;


 			}
}