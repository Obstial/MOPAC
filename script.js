$(document).ready(function() {
  $(".searchbtn").click(function() {
      $(this).toggleClass("bg-green");
      $(".fas").toggleClass("color-white");
      $(".input").toggleClass("active-width").focus();
      
      if ($(".input").hasClass("active-width")) {
          $(".input").val('');
      }
  });

  $(".input").on('keypress', function(e) {
      if (e.which === 13) {
          let searchTerm = $(this).val().toLowerCase();
          let found = false;

          $(".Hcaption").each(function() {
              let itemText = $(this).text().toLowerCase();
              if (itemText.includes(searchTerm)) {
                  found = true;
                  let itemLink = $(this).closest("figure").find("a").attr("href");
                  if (itemLink) {
                      window.location.href = itemLink;
                  }
              }
          });

          if (!found) {
              alert("No results found for '" + searchTerm + "'");
          }
      }
  });

  $(".input").on('blur', function() {
      if (!$(this).val()) {
          $(".Hcaption").closest("figure").show();
      }
  });
});
