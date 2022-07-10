const str = '712569312664357328695151392';
const str2 = '8100824045303269669937';

function sumStrings(a, b) {
  const a1 = BigInt(a);
  const a2 = BigInt(b);
  const resNum = a1 + a2;
  const resStr = String(resNum);
  console.log(resStr);
  return resStr;
}

sumStrings(str, str2);
