$(document).ready(function(){
    function count_down(){
        var target=$("#J_mistake_skip").val().trim();
        $(".mistake-product>.to-product").click(function(){
            window.location.href= target;
        });
    }
    count_down();
});