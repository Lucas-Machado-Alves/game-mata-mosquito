const PopUp = 
{   
   bodyClass: null,
   blackClass: null,
   body: (element, type)=>
   {
       let obj = null;
       if (typeof element != "string") 
       {
           return false;
       }
     switch (type)
     {
         case "id":
             obj = document.getElementsByClassName(element);
         break;
         case "class":
             obj = document.getElementsByClassName(element)[0];
         break;
         case "body":
             obj = document.body;
         default:
             obj = false;
     }
     if (typeof obj === "object")
     {
         return obj;
     }else{
         return false;
     }
 
   },
   show : (text, element) =>
   {
     let body = PopUp.body("boxGame", "class"),
         black = document.createElement("div"),
         popup = document.createElement("div"),
         close = document.createElement("div"),
         textNode = document.createElement("div"),
         center = document.createElement("center"),
         button = document.createElement("button");

         if (body) 
         {
             PopUp.bodyClass = popup;
             PopUp.blackClass = black;
             black.className = "black";
             body.appendChild(black);
             popup.className = "popoup child";
             close.className = "close";
             close.setAttribute("onclick", "PopUp.close()");
             close.appendChild(document.createTextNode("[X]"));
             popup.appendChild(close);
             textNode.className = "text";

             textNode.appendChild(document.createTextNode(text));
             popup.appendChild(textNode);

             button.className = "btn btn-danger btn-lg bt";
             button.type = "button";
             button.setAttribute("onclick", "PopUp.close()");
             button.appendChild(document.createTextNode("Entendi"));
             center.appendChild(button);

             popup.appendChild(center);
             body.appendChild(popup); 
             
         }

   },
   close: () =>
   {
     if(PopUp.bodyClass && PopUp.blackClass){
         PopUp.bodyClass.remove();
         PopUp.blackClass.remove();
         return true;
     }else{
         return false;
     }

   } 
}