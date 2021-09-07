    
    var name = prompt("Esriba su nombre", "anonymus")
    
        function makebar()
        {   
            var output = "<HR ALIGN='left' WIDTH=1000>"
            document.write(output)
        }
        
        function makeHeader(text, color, size)
        {
            var output ="<FONT COLOR='"+ color +"' SIZE="+size+">"+text+"</FONT>" 
            document.write(output)
            makebar()
        }
    makeHeader(name,"red","+4")

    var age=parseInt(prompt("Escriba su edad", 12))
    if(age<21)
        alert("Sorry, you are too young to enter")
    var number1 = 1;
    var number2=1;
    
    for(var counter=1; counter<=10;counter++)
    {       
        document.write(number1+" ")
        number2 =number2+number1
        number1= number2-number1
    }
    document.write("<BR>")
    
    for(var i=1; i<=10; i++)
    {   
        for(var j=1; j<=25; j++)
        {
            document.write("*")
        }
        document.write("<BR>")
    }

    var n=parseInt(prompt("Enter a number", 10))
    var nFactorial=1
    var factor=1
    while(factor<n)
    {   
        factor++
        nFactorial*=factor
    }
    
    alert(n+"! is"+nFactorial)
    
    var result=""
    for(curProperty in document)
    {
        result+="document."+curProperty+"<BR>"
    }
    
    document.write(result)
