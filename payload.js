
//error handling for no iframe
if (document.getElementsByTagName("iframe") != null) {
    var iframe = document.getElementsByTagName("iframe")[0]
    if (iframe != null) {
        var iframeDocument = iframe.contentDocument || iframe.contentWindow.document;


        var sections = new Array();
        var totalSection = new String();

        sections = iframeDocument.getElementsByTagName("section");
        for (let section of sections) {
            var title = section.getElementsByTagName("h1");
            if (title.length != 0) {
                totalSection += ("<h1>" + title[0].textContent + "</h1>");
            }

            var paragraphs = section.getElementsByTagName("p");
            for (let paragraph of paragraphs) {
                totalSection += ("<p>" + paragraph.textContent + "</p>")
            }
        }

        chrome.runtime.sendMessage("Text detected, Loading...")
        chrome.runtime.sendMessage(totalSection);

        
    }
}

