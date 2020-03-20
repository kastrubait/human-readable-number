module.exports = function toReadable (number) {
  let names = new Array();
        names [0] = '';
        names [1] = 'one';
        names [2] = 'two';
        names [3] = 'three';
        names [4] = 'four';
        names [5] = 'five';
        names [6] = 'six';
        names [7] = 'seven';
        names [8] = 'eight';
        names [9] = 'nine';
        names [10] = 'ten';
        names [11] = 'eleven';
        names [12] = 'twelve';
        names [13] = 'thirteen';
        names [14] = 'fourteen';
        names [15] = 'fifteen';
        names [16] = 'sixteen';
        names [17] = 'seventeen';
        names [18] = 'eighteen';
        names [19] = 'nineteen';
        names [20] = 'twenty';
        names [30] = 'thirty';
        names [40] = 'forty';
        names [50] = 'fifty';
        names [60] = 'sixty';
        names [70] = 'seventy';
        names [80] = 'eighty';
        names [90] = 'ninety';
        
    let groups = ['hundred', 'thousand', 'million','billion', 'trillion'];
    
    let res = '';
    let cnum = number;
    
    if (number == 0) return 'zero';

    let tr = [];
    for ( let i = 0; i<= Math.trunc(number.toString().length/3); i++) {
        tr[i] = cnum % 1000;
        cnum = Math.trunc(cnum/1000);
    }
       
    let num= [];
    for ( let i=0; i<= Math.trunc(number.toString().length/3); i++) {
        num[i] = new Array();
        num[i][0] = tr[i]%10; 
        num[i][10] = tr[i]%100-num[i][0]; 
        num[i][100] = Math.trunc((tr[i]-num[i][10]-num[i][0])/100); 
        num[i][11] = tr[i]%100; 
    }
    
    for ( let i = Math.trunc(number.toString().length/3); i >= 0; i--) {
      if (tr[i] > 0 ) {
          if (num[i][100]>0) {
              res += ' ' + names[num[i][100]] + ' ' + groups[i];
            }
          if (names[num[i][11]]) {
              res += ' ' + names[num[i][11]];
            } else {
                res += ' ' + names[num[i][10]];
                if (names[num[i][0]]) res += ' ' + names[num[i][0]];
            }
        if (i > 0 && tr[i] > 0 ) res += ' ' + groups[i];
        if (res[res.length-1] == ' ') res = res.slice(0, res.length-1);
        } 
    }
    return res.slice(1);
}
