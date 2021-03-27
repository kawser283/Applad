$(document).ready(function(){
    $('.btn-1').addClass('select');
    // Price tabel
    $('.price-table-1').addClass('table-selected');

    $('.btn-1').click(function(){
        $('.btn-1').addClass('select');
        $('.btn-2').removeClass('select');


        $('.price-table-1').addClass('table-selected');
        $('.price-table-2').removeClass('table-selected');
    });
    $('.btn-2').click(function(){
        $('.btn-2').addClass('select');
        $('.btn-1').removeClass('select');

        $('.price-table-2').addClass('table-selected');
        $('.price-table-1').removeClass('table-selected');
    });
});
table-selected