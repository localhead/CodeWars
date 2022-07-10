const a = 'http://github.com/carbonfive/raygun'; // -> domain name = "github"
const b = 'http://www.zombie-bites.com'; // -> domain name = "zombie-bites"
const c = 'https://www.cnet.com'; // -> domain name = cnet"
const d = 'http://google.com'; // -> domain name = cnet"
const e = 'www.xakep.ru'; // -> domain name = cnet"
const f = 'nrxr2vd9aj110s5kbifew3nu7i.co.uk'; // -> domain name = cnet"

function domainName(url) {
  // Вычленить www, либо http:// , либо https://
  let strArr0 = [];
  let strArr1 = '';
  /* In case of  http: */
  if (
    url[0] === 'h' &&
    url[1] === 't' &&
    url[2] === 't' &&
    url[3] === 'p' &&
    url[4] != 's'
  ) {
    strArr0 = url.split('http://');
    strArr1 = strArr0.join('');
  } else if (
    /* In case of  www */
    url[0] === 'w' &&
    url[1] === 'w' &&
    url[2] === 'w' &&
    url[3] === '.'
  ) {
    strArr0 = url.split('www.');
    strArr1 = strArr0.join('');
  } else if (
    /* In case of  https: */
    url[0] === 'h' &&
    url[1] === 't' &&
    url[2] === 't' &&
    url[3] === 'p' &&
    url[4] === 's'
  ) {
    strArr0 = url.split('https://');
    strArr1 = strArr0.join('');
  } else {
    strArr1 = url;
  }
  //
  //
  /* In case if we have www. */
  let strWww = strArr1.split('www.');
  let strArr2 = strWww.join('');

  let strRes = '';
  let strLast = strArr2.split('.');
  //console.log(strLast);

  return (strRes = strLast[0]);
}

let res = domainName(f);
console.log(res);
