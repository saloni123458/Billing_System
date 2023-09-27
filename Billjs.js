//
var arrTotal={};
function getArraySum(a) {
    var total = 0;
    for (var i in a) {
        total += a[i];
    }
    return total;
}
// function saveDynamicDataToFile() {

//     var userInput = document.getElementById("myText").value;

//     var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
//     saveAs(blob, "D:\VS CODE\C code\lets_c\Bill_project\dynamic.txt");
// }
// let No=1;
// // document.getElementById("number").stepUp(1);
// function innoo(){
//     No++;
//     alert(No);
//     // document.getElementById("inovno").innerHTML = No;
// }
function amt() {
    var tot = 0;
    var pakages1 = document.getElementById("pkg1").value;
    var mrp1 = document.getElementById("mrp1").value;
    var exp1 = document.getElementById("exp1").value;
    var rate1 = document.getElementById("rate1").value;
    var qty1 = document.getElementById("qty1").value;
    var disk1 = document.getElementById("Disk1").value;
    //mrp1=parseInt(mrp1);rate1=parseInt(rate1);
    var rc1 = parseInt(mrp1 + rate1) * qty1;
    var dis = rc1 - (rc1) * (disk1 / 100);
    // tot = tot + dis;
    arrTotal[1]=tot + dis;
    console.log(tot);
    document.getElementById("tot1").innerHTML = dis;

    var pakages2 = document.getElementById("pkg2").value;
    var mrp2 = document.getElementById("mrp2").value;
    var exp2 = document.getElementById("exp2").value;
    var rate2 = document.getElementById("rate2").value;
    var qty2 = document.getElementById("qty2").value;
    var disk2 = document.getElementById("Disk2").value;
    //mrp2=parseInt(mrp2);rate2=parseInt(rate2);
    var rc2 = parseInt(mrp2 + rate2) * qty2;
    var dis = rc2 - (rc2) * (disk2 / 100);
    // tot = tot + dis;
    arrTotal[2]=tot + dis;
    console.log(tot);
    document.getElementById("tot2").innerHTML = dis;

    var pakages3 = document.getElementById("pkg3").value;
    var mrp3 = document.getElementById("mrp3").value;
    var exp3 = document.getElementById("exp3").value;
    var rate3 = document.getElementById("rate3").value;
    var qty3 = document.getElementById("qty3").value;
    var disk3 = document.getElementById("Disk3").value;
    //mrp3=parseInt(mrp3);rate3=parseInt(rate3);
    var rc3 = parseInt(mrp3 + rate3) * qty3;
    var dis = rc3 - (rc3) * (disk3 / 100);
    // tot = tot + dis;
    arrTotal[3]=tot + dis;
    console.log(tot);
    document.getElementById("tot3").innerHTML = dis;

    var pakages4 = document.getElementById("pkg4").value;
    var mrp4 = document.getElementById("mrp4").value;
    var exp4 = document.getElementById("exp4").value;
    var rate4 = document.getElementById("rate4").value;
    var qty4 = document.getElementById("qty4").value;
    var disk4 = document.getElementById("Disk4").value;
    //mrp4=parseInt(mrp4);rate4=parseInt(rate4);
    var rc4 = parseInt(mrp4 + rate4) * qty4;
    var dis = rc4 - (rc4) * (disk4 / 100);
    // tot = tot + dis;
    arrTotal[4]=tot + dis;
    console.log(tot);
    document.getElementById("tot4").innerHTML = dis;

    var pakages5 = document.getElementById("pkg5").value;
    var mrp5 = document.getElementById("mrp5").value;
    var exp5 = document.getElementById("exp5").value;
    var rate5 = document.getElementById("rate5").value;
    var qty5 = document.getElementById("qty5").value;
    var disk5 = document.getElementById("Disk1").value;
    //mrp5=parseInt(mrp5);rate5=parseInt(rate5);
    var rc5 = parseInt(mrp5 + rate5) * qty5;
    var dis = rc5 - (rc5) * (disk5 / 100);
    // tot = tot + dis;
    arrTotal[5]=tot + dis;
    console.log(tot);
    document.getElementById("tot5").innerHTML = dis;

    var pakages6 = document.getElementById("pkg6").value;
    var mrp6 = document.getElementById("mrp6").value;
    var exp6 = document.getElementById("exp6").value;
    var rate6 = document.getElementById("rate6").value;
    var qty6 = document.getElementById("qty6").value;
    var disk6 = document.getElementById("Disk6").value;
    //mrp6=parseInt(mrp6);rate6=parseInt(rate6);
    var rc6 = parseInt(mrp6 + rate6) * qty6;
    var dis = rc6 - (rc6) * (disk6 / 100);
    // tot = tot + dis;
    arrTotal[6]=tot + dis;
    console.log(tot);
    document.getElementById("tot6").innerHTML = dis+0.00;

    // var shipc = document.getElementById("schr").value;
    // tot = tot + parseInt(shipc);
    //(tot).toFixed(2); 
    // tot = getArraySum(arrTotal);
    var distotal = 0;
    for(var cal in arrTotal){
        if(arrTotal[cal]){
        distotal += arrTotal[cal];
        }
    }
    console.log("The tot is ",distotal);
    document.getElementById("famt").innerHTML = distotal;
    var balamt = distotal - document.getElementById("revsamt").value;
    (balamt).toPrecision(2);
    document.getElementById("bamt").innerHTML = balamt;
    var wtg = toWordsconver(distotal);
    document.getElementById("TotAmtInWords").innerHTML = wtg;

    // document.getElementById("famt").innerHTML = ss;
    //     // tr.innerHTML(ss);
    //     // alert(ss);
    //     var recived = document.getElementById("revsamt").value;
    //     var tg = (ss-recived);
    //     document.getElementById("bamt").innerHTML = tg;
    //     var wtg = toWordsconver(ss);
    //     // alert(wtg);
    //     document.getElementById("invamt").innerHTML = wtg;
    //     // console.log(tg);
}

function passvalue() {
    var pbillto = document.getElementById("nam").value;
    localStorage.setItem("billtoname", pbillto);
    return false;
}
// Call the function toWordsconver(number) passing a number to it: 

var th_val = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
// System for uncomment this line for Number of English 
// var th_val = ['','thousand','million', 'milliard','billion'];

var dg_val = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
var tn_val = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
var tw_val = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

function toWordsconver(s) {
    s = s.toString();
    s = s.replace(/[\, ]/g, '');
    if (s != parseFloat(s))
        return 'not a number ';
    var x_val = s.indexOf('.');
    if (x_val == -1)
        x_val = s.length;
    if (x_val > 15)
        return 'too big';
    var n_val = s.split('');
    var str_val = '';
    var sk_val = 0;
    for (var i = 0; i < x_val; i++) {
        if ((x_val - i) % 3 == 2) {
            if (n_val[i] == '1') {
                str_val += tn_val[Number(n_val[i + 1])] + ' ';
                i++;
                sk_val = 1;
            } else if (n_val[i] != 0) {
                str_val += tw_val[n_val[i] - 2] + ' ';
                sk_val = 1;
            }
        } else if (n_val[i] != 0) {
            str_val += dg_val[n_val[i]] + ' ';
            if ((x_val - i) % 3 == 0)
                str_val += 'Hundred ';
            sk_val = 1;
        }
        if ((x_val - i) % 3 == 1) {
            if (sk_val)
                str_val += th_val[(x_val - i - 1) / 3] + ' ';
            sk_val = 0;
        }
    }
    if (x_val != s.length) {
        var y_val = s.length;
        str_val += 'point ';
        for (var i = x_val + 1; i < y_val; i++)
            str_val += dg_val[n_val[i]] + ' ';
    }
    return str_val.replace(/\s+/g, ' ');
}
//****************************TRY*************************** */
let saveFile = () => {
    	
    // Get the data from each element on the form.
    var pakages1 = document.getElementById("pkg1").value;
    var mrp1 = document.getElementById("mrp1").value;
    var exp1 = document.getElementById("exp1").value;
    var rate1 = document.getElementById("rate1").value;
    var qty1 = document.getElementById("qty1").value;
    var disk1 = document.getElementById("Disk1").value;
    
    // This variable stores all the data.
    let data = 
        '\r Mrp: ' + mrp1.value + ' \r\n ' + 
        'Exp: ' +exp1.value + ' \r\n ' + 
        'Rate: ' + rate1.value + ' \r\n ' + 
        'quy : ' + qty1.value + ' \r\n ' + 
        'discount: ' + Disk1.value+
        'Amount: '+ tot1.value+ ' \r\n ' ;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}
//
function exportt(filename) {
    var csv = [];
    var rows = document.getElementById('tbl_posts').querySelectorAll("table tr");

    for (var i = 0; i < rows.length; i++) {

        var row = [], cols = rows[i].querySelectorAll("td, th");
    
        for (var j = 0; j < cols.length; j++){
            row.push(cols[j].innerText);
        }
            
        csv.push(row.join(","));

}

// Download CSV file not posted here
downloadCSV(csv.join("\n"), filename);
}
function fnExcelReport()
{
    var tab_text="<table border='2px'><tr bgcolor='#87AFC6'>";
    var textRange; var j=0;
    tab = document.getElementById('userdet'); // id of table

    for(j = 0 ; j < tab.rows.length ; j++) 
    {     
        tab_text=tab_text+tab.rows[j].innerHTML+"</tr>";
        //tab_text=tab_text+"</tr>";
    }

    tab_text=tab_text+"</table>";
    tab_text= tab_text.replace(/<A[^>]*>|<\/A>/g, "");//remove if u want links in your table
    tab_text= tab_text.replace(/<img[^>]*>/gi,""); // remove if u want images in your table
    tab_text= tab_text.replace(/<input[^>]*>|<\/input>/gi, ""); // reomves input params

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE "); 

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer
    {
        txtArea1.document.open("txt/html","replace");
        txtArea1.document.write(tab_text);
        txtArea1.document.close();
        txtArea1.focus(); 
        sa=txtArea1.document.execCommand("SaveAs",true,"Say Thanks to Sumit.xls");
    }  
    else                 //other browser not tested on IE 11
        sa = window.open('data:application/vnd.ms-excel,' + encodeURIComponent(tab_text));  

    return (sa);
}
function ExportToExcel(type, fn, dl) {
    alert("in export");
    var elt = document.getElementById('userdet');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
 }
 function ExportToExcel1(type, fn, dl) {
   alert("in export");
   //check what is tye fn n dl
   //file append aur data mapping
   var elt = document.getElementById('userentrys');
   var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
   return dl ?
     XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
     XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
}
// ! jQuery v1.8.3 jquery.com | jquery.org/license */
 function ExportToExcel(type, fn, dl) {
     alert("in export");
     var elt = document.getElementById('userdet');
     var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
     return dl ?
       XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
       XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
  }
  function ExportToExcel1(type, fn, dl) {
    alert("in export");
    //check what is tye fn n dl
    //file append aur data mapping
    var elt = document.getElementById('userentrys');
    var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
    return dl ?
      XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
      XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
  }
//*****************COMMENTS*********************************/
// function WriteToFile(passForm) {

//     var fso = CreateObject("Scripting.FileSystemObject");
//     var s = fso.CreateTextFile("Billls.txt", True);

//     var FirstName = document.getElementById('FirstName');
//     var lastName = document.getElementById('lastName');

//     s.writeline("First Name :" + FirstName);
//     s.writeline("Last Name :" + lastName);

//     s.writeline("-----------------------------");
//     s.Close();
// }
// //TRY
// function toExcel() {

//     if ("ActiveXObject" in window) {
//         alert("This is Internet Explorer!");
//     } else {

//         var cache = {};
//         this.tmpl = function tmpl(str, data) {
//             var fn = !/\W/.test(str) ? cache[str] = cache[str] || tmpl(document.getElementById(str).innerHTML) :
//                 new Function("obj",
//                     "var p=[],print=function(){p.push.apply(p,arguments);};" +
//                     "with(obj){p.push('" +
//                     str.replace(/[\r\t\n]/g, " ")
//                     .split("{{").join("\t")
//                     .replace(/((^|}})[^\t]*)'/g, "$1\r")
//                     .replace(/\t=(.*?)}}/g, "',$1,'")
//                     .split("\t").join("');")
//                     .split("}}").join("p.push('")
//                     .split("\r").join("\\'") + "');}return p.join('');");
//             return data ? fn(data) : fn;
//         };
//         var tableToExcel = (function () {
//             var uri = 'data:application/vnd.ms-excel;base64,',
//                 template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{{=worksheet}}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body>{{for(var i=0; i<tables.length;i++){ }}<table>{{=tables[i]}}</table>{{ } }}</body></html>',
//                 base64 = function (s) {
//                     return window.btoa(unescape(encodeURIComponent(s)));
//                 },
//                 format = function (s, c) {
//                     return s.replace(/{(\w+)}/g, function (m, p) {
//                         return c[p];
//                     });
//                 };
//             return function (tableList, name) {
//                 if (!tableList.length > 0 && !tableList[0].nodeType) table = document.getElementById(table);
//                 var tables = [];
//                 for (var i = 0; i < tableList.length; i++) {
//                     tables.push(tableList[i].innerHTML);
//                 }
//                 var ctx = {
//                     worksheet: name || 'Worksheet',
//                     tables: tables
//                 };
//                 window.location.href = uri + base64(tmpl(template, ctx));
//             };
//         })();
//         tableToExcel(document.getElementsByTagName("table"), "one");
//     }
// }
// var fs = require('fs');
// fs.writeFile('bills.txt', "hello", function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
// const fs = require("fs");

// fs.appendFile("sample.txt", "Appending content", (err) => {
//     if (err) throw err;
//     console.log("Completed!");
// });
// var wb = XLSX.utils.book_new();
// wb.Props = {
//     Title: "SheetJS Tutorial",
//     Subject: "Test",
//     Author: "Red Stapler",
//     CreatedDate: new Date(2017, 12, 19)
// };

// wb.SheetNames.push("Test Sheet");
// var ws_data = [
//     ['hello', 'world']
// ];
// var ws = XLSX.utils.aoa_to_sheet(ws_data);
// wb.Sheets["Test Sheet"] = ws;
// var wbout = XLSX.write(wb, {
//     bookType: 'xlsx',
//     type: 'binary'
// });

// function s2ab(s) {

//     var buf = new ArrayBuffer(s.length);
//     var view = new Uint8Array(buf);
//     for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
//     return buf;

// }
// $("#button-a").click(function () {
//     saveAs(new Blob([s2ab(wbout)], {
//         type: "application/octet-stream"
//     }), 'test.xlsx');
// });
// Excel.run(function (context) {
//     var firstSheet = context.workbook.worksheets.getFirst();
//     firstSheet.load("name");

//     return context.sync()
//         .then(function () {
//             console.log(`The name of the first worksheet is "${firstSheet.name}"`);
//         });
// }).catch(errorHandlerFunction);

// ! jQuery v1.8.3 jquery.com | jquery.org/license */
//  function ExportToExcel(type, fn, dl) {
//      alert("in export");
//      var elt = document.getElementById('userdet');
//      var wb = XLSX.utils.table_to_book(elt, { sheet: "sheet1" });
//      return dl ?
//        XLSX.write(wb, { bookType: type, bookSST: true, type: 'base64' }):
//        XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
// //   }
// function ExportToExcel1(type, fn, dl) {
//     alert("in export");
//     //check what is tye fn n dl
//     //file append aur data mapping
//     var elt = document.getElementById('userentrys');
//     var wb = XLSX.utils.table_to_book(elt, {
//         sheet: "sheet1"
//     });
//     return dl ?
//         XLSX.write(wb, {
//             bookType: type,
//             bookSST: true,
//             type: 'base64'
//         }) :
//         XLSX.writeFile(wb, fn || ('MySheetName.' + (type || 'xlsx')));
    // }