let currentIdx = 0, countSlick = 15
$('.galleries-preview').slick({
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    asNavFor: '.galleries-jumbotron',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});
$('.galleries-preview').on('afterChange', function(event, slick, currentSlide, nextSlide){
    slickGoTo(currentSlide)
});

$('.galleries-jumbotron').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    focusOnSelect: true,
    asNavFor: '.galleries-preview'
});

function nextSlick(){
    $('.galleries-preview').slick("slickNext")
    currentIdx++
    changeCenterPreview()
}
function prevSlick(){
    $('.galleries-preview').slick("slickPrev")
    currentIdx--
    changeCenterPreview()
}
function slickGoTo(idx){
    $('.galleries-preview').slick("slickGoTo", idx)
    currentIdx = idx
    changeCenterPreview()
}
function changeCenterPreview(){
    if(currentIdx < 0){
        currentIdx = countSlick
    }
    $('.galleries-skyland').removeClass('opacity-100');
    $('.galleries-skyland').addClass('opacity-20');
    $('.galleries-'+currentIdx).addClass('opacity-100');
}
function hiddenModal () {
    $('#popup-galleries').addClass('hidden');
}
function openModal () {
    $('#popup-galleries').removeClass('hidden');
}
changeCenterPreview()