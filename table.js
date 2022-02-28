/* conditional  loopping to table */
 function table(){

   document.write("<style='font-family: Arial, Helvetica, sans-serif'>")
    document.write(`<center><br><h2 style='font-family: Arial, Helvetica, sans-serif;background-color: rgb(245, 195, 129)'>TABLE</h2><br><table style="border:2px solid;font-family: Arial, Helvetica, sans-serif;background-color: rgba(215, 190, 243, 0.287)">`)
    for (let x = 1; x <= 10; x++) 
    {
        
       document.write("<tr style='hight:70px;border:1px solid '>");
       for (var b = 1; b <=20; b++) {
    document.write(`<td style='width:60px;border:1px solid '><center><font size='4'> ${x*b} </center></font></td>`);
   }
   document.write("</tr>");
 }
 document.write("</table></center>");
}
