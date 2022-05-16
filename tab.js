var car1 = { name : '소나타', price : [50000, 3000, 4000] };
document.querySelector('.car-price').innerHTML = car1.price[0];


var btn = $('.tab-button');
var ctt = $('.tab-content');

for (let i = 0; i< btn.length; i++){
  $('.tab-button').eq(i).on('click', function(){
    tabOpen(i)
  })
}

// $('.list').click(function(e){
  
//   if(e.target == document.querySelectorAll('tab-button')[0]){
//     tabOpen(0)
//   }
//   else if(e.target == document.querySelectorAll('tab-button')[1]){
//     tabOpen(1)
//   }
//   else if(e.target == document.querySelectorAll('tab-button')[2]){
//     tabOpen(2)
//   }

// })

// $('.list').click(function(e){
//   tabOpen(e.target.dataset.id)
// })


function tabOpen(n){
  btn.removeClass('orange');
  btn.eq(n).addClass('orange');
  ctt.removeClass('show');
  ctt.eq(n).addClass('show');
}
var shirts = [95,100]
var pants = [28, 30, 32];
var form = $('.form-select');


  form.eq(0).on('input', function(){

    var value = form.eq(0).val();
    if (value == '셔츠') {
      form.eq(1).removeClass('form-hide');
      form.eq(1).html('');
      for(var key in shirts){
        form.eq(1).append(`<option>${shirts[key]}</option>`)
      }
    }
    else if(value == '모자'){
      form.eq(1).addClass('form-hide');
    }
    else if(value == '바지'){
      form.eq(1).removeClass('form-hide');
      form.eq(1).html('');
      pants.forEach(function(a){
        form.eq(1).append(`<option>${a}</option>`);
      })
    }

  });
