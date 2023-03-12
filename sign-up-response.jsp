<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="sign-up-response.css" rel="stylesheet">
    <link href="mini-game.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fredericka+the+Great&family=Shantell+Sans:wght@500&display=swap" rel="stylesheet">
</head>
<body>
    
    <h2>Hi ${param.name}, You are registered with the following information </h2>
    <div id="backArea">
        <p>Your Name: ${param.name}</p>
        <p>Your Email Id: ${param.email}</p>
        <p>Country: ${param.country}</p>
        <p>Gender: ${param.gender}
        <p>Your Hobbies are</p>
        <ul>
        <%
        String[] hobby= request.getParameterValues("interest");
        for(String temp : hobby){
            out.println("<li>"+temp+"</li>");
        }
        %>
        </ul>
        <p>About Me: ${param.about_me}</p>
    </div>
    <div class="mini-game">
        <h4>Mini-Game</h4><br>
        <div class="grid">

        </div>
        <br>
        <h3 class="result">0</h3>
    </div>
    <script src="mini-game.js"></script>
</body>
</html>