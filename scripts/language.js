const my = {
  header: {
    title: 'SEA',
    searchBy: '..ဖြင့်ရှာမည်',
    byName: 'နာမည်ဖြင့်',
    byGrade: 'အတန်းဖြင့်',
    byAge: 'အသက်ဖြင့်',
    byKeyword: 'ကီးဝတ်ဖြင့်',
    searchPlaceholder: 'ရှာမည်',
    searchTooltip: 'ကျောင်းသားရှာမည်',
    totalStudents: 'စုစုပေါင်း - ${allStudents.length} ယောက်',
  },
  grade: {
    kg: 'သူငယ်တန်း',
    grade1: 'ပထမတန်း',
    grade2: 'ဒုတိယတန်း',
    grade3: 'တတိယတန်း',
    grade4: 'စတုတ္ထတန်း',
    grade5: 'ပဉ္စမတန်း',
    grade6: 'ဆဌမတန်း',
    grade7: 'သတ္တမတန်း',
    grade8: 'အဌမတန်း',
    grade9: 'နဝမတန်း'
  }
};

myLan();

function myLan(){
  const leftSectionElement = document.querySelector('.left-section');
  const byNameElement = document.querySelector('.by-name');
  const byGradeElement = document.querySelector('.by-grade');
  const byAgeElement = document.querySelector('.by-age');
  const byKeywordElement = document.querySelector('.by-keyword');

  byNameElement.innerHTML = my.header.byName;
  byGradeElement.innerHTML = my.header.byGrade;
  byAgeElement.innerHTML = my.header.byAge;
  byKeywordElement.innerHTML = my.header.byKeyword;
}