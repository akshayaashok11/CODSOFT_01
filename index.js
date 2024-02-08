var tablinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function opentab(input)
{clea
    for(var tablink of tablinks)
    {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabContents)
    {
        tabcontent.classList.remove("active-tab");
    }
    document.getElementById(input).classList.add('active-tab');
 event.currentTarget.classList.add('active-link');
}
