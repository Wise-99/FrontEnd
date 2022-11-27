// 1학년 테이블 추가 버튼
function btn_add_one(){
  // table element 찾기(1학년)
  var table_add1 = document.getElementById('one');

  // 추가 함수
  addTable(table_add1);
}

// 1학년 테이블 삭제 버튼
function btn_delete_one(){
  // table element 찾기(1학년)
  var table_del1 = document.getElementById("one");
  
  // 삭제 함수
  deleteTable(table_del1);
}

//1학년 테이블 저장 버튼
function btn_save_one(){
  // table element 찾기(1학년)
  var table_save1 = document.getElementById('one');

  // 테이블 저장 함수
  saveTable(table_save1);
}

// 2학년 테이블 추가 버튼
function btn_add_two(){
  // table element 찾기(2학년)
  var table_add2 = document.getElementById('two');
  
  // 추가 함수
  addTable(table_add2);
}

// 2학년 테이블 삭제 버튼
function btn_delete_two(){
  // table element 찾기(2학년)
  var table_del2 = document.getElementById("two");
  // 삭제 함수
  deleteTable(table_del2);
}

//2학년 테이블 저장 버튼
function btn_save_two(){
// table element 찾기(2학년)
var table_save2 = document.getElementById('two');

// 테이블 저장 함수
saveTable(table_save2);
}

// 3학년 테이블 추가 버튼
function btn_add_three(){
  // table element 찾기(3학년)
  var table_add3 = document.getElementById('three');

  // 추가 함수
  addTable(table_add3);
}

// 3학년 테이블 삭제 버튼
function btn_delete_three(){
  // table element 찾기(3학년)
  var table_del3 = document.getElementById("three");
  
  // 삭제 함수
  deleteTable(table_del3);
}

//3학년 테이블 저장 버튼
function btn_save_three(){
  // table element 찾기(3학년)
  var table_save3 = document.getElementById('three');

  // 테이블 저장 함수
  saveTable(table_save3);
}

// 성적을 구하는 함수
function grade(num){

  if(num >= 95){ // 95 이상이면 A+
    return "A+";
  }
  else if(num < 95 && num >= 90){ // 90 이상 95 미만이면 A0
    return "A0";
  }
  else if(num < 90 && num >= 85){ // 85 이상 90 미만이면 B+
    return "B+";
  }
  else if(num < 85 && num >=80){ // 80 이상 85 미만이면 B0
    return "B0";
  }
  else if(num < 80 && num >= 75){ // 75 이상 80 미만이면 C+
    return "C+";
  }
  else if(num < 75 && num >= 70){ // 70 이상 75 미만이면 C0
    return "C0";
  }
  else if(num < 70 && num >= 65){ //  65 이상 70 미만이면 D+
    return "D+";
  }
  else if(num < 65 && num >= 60){ //  60 이상 65 미만이면 D0
    return "D0";
  }
  else if(num < 60 && num != ""){              // 60 미만이면 F(빨간색으로 지정)
    return "<font color='red'>"+ "F" + "</font>";
  }
  else if(num == ""){ // 구할 점수가 없다면
    return "P";
  }
}

// 총 평균 학점을 계산하기 위한 함수
function totalGrade(g_arr, g_sum, sj_grade){
  var total = 0; // 총 평균 학점을 저장할 변수

  for(var i = 0; i < sj_grade.length; i++){

    // 학점 계산 식 -> (각 과목 학점 * 각 과목 성적) 더한 총 합 / 총 신청 학점
    if(sj_grade[i] == "A+"){ total += g_arr[i].value * 4.5; }
    else if(sj_grade[i] == "A0"){ total += parseInt(g_arr[i].value) * 4.0; }
    else if(sj_grade[i] == "B+"){ total += parseInt(g_arr[i].value) * 3.5; }
    else if(sj_grade[i] == "B0"){ total += parseInt(g_arr[i].value) * 3.0; }
    else if(sj_grade[i] == "C+"){ total += parseInt(g_arr[i].value) * 2.5; }
    else if(sj_grade[i] == "C0"){ total += parseInt(g_arr[i].value) * 2.0; }
    else if(sj_grade[i] == "D+"){ total += parseInt(g_arr[i].value) * 1.5; }
    else if(sj_grade[i] == "D0"){ total += parseInt(g_arr[i].value) * 1.0; }
    else if(sj_grade[i] == "P"){ g_sum -= 1; }
    else { total += 0; }
  }

  total /= g_sum; // 합 /= 총 신청 학점(1학점 온강 제외)
  return total.toFixed(2); // 소수점 둘째 자리까지 표시 후 리턴
}

// 테이블 정렬 함수
function sortTable(table){
  
}

//학년별 항목들의 name에 붙는 숫자를 구하기 위한 함수
function number(id){
  if(id == "one")      // id가 one이면 1을 저장
    return 1;
  else if(id == "two") // id가 two이면 1을 저장
    return 2;
  else                 // id가 three이면 3을 저장
    return 3;
}

// 테이블 추가 함수
function addTable(table){

  // 학년별 표 cell의 name을 구별하기 위한 비교 및 저장
  var num = number(table.id);
  
  // 새 행(Row) 추가
  var newRow = table.insertRow();
  
  // 새 행(Row)에 Cell 추가
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);
  var newCell3 = newRow.insertCell(2);
  var newCell4 = newRow.insertCell(3);
  var newCell5 = newRow.insertCell(4);
  var newCell6 = newRow.insertCell(5);
  var newCell7 = newRow.insertCell(6);
  var newCell8 = newRow.insertCell(7);
  var newCell9 = newRow.insertCell(8);
  var newCell10 = newRow.insertCell(9);
  var newCell11 = newRow.insertCell(10);
  var newcell12 = newRow.insertCell(11);
  
  // Cell에 입력란 추가(학년별로 숫자를 넣어 구별)
  newCell1.innerHTML = "<td><select name='complete'><option value='major'>전공</option><option value='n_major'>교양</option></select></td>";
  newCell2.innerHTML = "<td><select name='essential'><option value='essential'>필수</option><option value='select'>선택</option></select></td>";
  newCell3.innerHTML = "<td><input type='TEXT' name='과목명' size='20'>";
  newCell4.innerHTML = "<td><input type='number' name="+ "'학점" + num +"'"+ " size='5' style = 'text-align:center;'>";
  newCell5.innerHTML = "<td><input type='number' name='출석점수" + num + "'" + "size='5' style = 'text-align:center;'>";
  newCell6.innerHTML = "<td><input type='number' name='과제점수" + num + "'" + "size='5' style = 'text-align:center;'>";
  newCell7.innerHTML = "<td><input type='number' name='중간고사" + num + "'" + "size='5' style = 'text-align:center;'>";
  newCell8.innerHTML = "<td><input type='number' name='기말고사" + num + "'" + "size='5' style = 'text-align:center;'>";
  newcell12.innerHTML = "<td><input type='checkbox' name='선택" + num + "'>";
}

// 테이블 삭제 함수
function deleteTable(table){

  // 학년별 표 cell의 name을 구별하기 위한 비교 및 저장
  var num = number(table.id);

  var lastRow = table.rows.length; // 테이블 전체 행의 수
  var rows = document.getElementsByName("선택"+num); // 체크박스가 있는 행들

  if(lastRow == 1){ // 테이블의 행이 1이라면(1은 th 행)
      alert("삭제할 행이 없습니다.");
      return;
  }

  var chRow = new Array(); // 체크된 행을 저장할 배열
  var unCheckCount = 0; // 체크 안된 행의 갯수 저장할 변수

  if(confirm("정말 삭제하시겠습니까?")){  

    if(lastRow - rows.length == 2) // 전체 행 - 체크박스가 있는 행들 == 2일때(맨 위 th와 합계 줄이 남아있을 때)
      table.deleteRow(-1); // 합계 줄 삭제

    for(var i = 0; i < rows.length; i++){ // 체크박스가 있는 행 전체 확인

      if(rows[i].checked){ // 체크가 되어있다면
        chRow[i] = 1; // 1을 저장
      } 
      else {
        chRow[i] = 0; // 체크가 안되어있다면 0을 저장
      }
    }

    for(var i = 0; i < lastRow; i++){ // 행 삭제
      if(chRow[i] == 1) // 1이라면(체크가 되어있다면)
        table.deleteRow(i+1); // 체크된 행 삭제
      else if(chRow[i] == 0) // 0 이라면(체크가 되어있지 않다면)
        unCheckCount++; // 체크 안된 행의 갯수 증가
    }
  }

  if(unCheckCount == chRow.length) // 체크 안된 행의 갯수와 전체 행 갯수가 같다면
      alert("삭제할 행을 선택해주세요.");

  return;
}

// 테이블 저장 함수
function saveTable(table){

  // 학년별 표 cell의 name을 구별하기 위한 비교 및 저장
  var num = number(table);

  sortTable(table);

  var g_sum = 0;  // 학점의 합계를 저장할 변수
  var at_sum = 0; // 출석점수의 합계를 저장할 변수
  var as_sum = 0; // 과제점수의 합계를 저장할 변수
  var m_sum = 0;  // 중간점수의 합계를 저장할 변수
  var f_sum = 0;  // 기말점수의 합계를 저장할 변수
  
  var g_arr = document.getElementsByName("학점"+num); // 학점의 모든 값을 배열로 저장(학년 구별)
  // 학점 합계 계산
  for(var i = 0; i < g_arr.length; i++){
    g_sum += parseInt(g_arr[i].value); // 학점 합산
  }

  var at_arr = document.getElementsByName("출석점수"+num); // 출석점수의 모든 값을 배열로 저장(학년 구별)

  // 출석점수 합계 계산
  for(var i = 0; i < at_arr.length; i++){
    if(at_arr[i].value != "") // 점수가 빈칸이 아니라면
      at_sum += parseInt(at_arr[i].value); // 점수 합산
  }

  var as_arr = document.getElementsByName("과제점수"+num); // 과제점수의 모든 값을 배열로 저장(학년 구별)

  // 과제점수의 합계 계산
  for(var i = 0; i < as_arr.length; i++){
    if(as_arr[i].value != "") // 점수가 빈칸이 아니라면
      as_sum += parseInt(as_arr[i].value); // 점수 합산
  }

  var m_arr = document.getElementsByName("중간고사"+num); // 중간고사의 모든 값을 배열로 저장(학년 구별)
  
  // 중간고사 점수의 합계 계산
  for(var i = 0; i < m_arr.length; i++){
    if(as_arr[i].value != "") // 점수가 빈칸이 아니라면
      m_sum += parseInt(m_arr[i].value); // 점수 합산
  }

  var f_arr = document.getElementsByName("기말고사"+num); // 기말고사의 모든 값을 배열로 저장(학년 구별)
  
  // 기말고사 점수의 합계 계산
  for(var i = 0; i < f_arr.length; i++){
    if(as_arr[i].value != "") // 점수가 빈칸이 아니라면
      f_sum += parseInt(f_arr[i].value); // 점수 합산
  }

  var tableRow = table.rows.length; // 테이블 전체 행의 수

  if(tableRow - f_arr.length != 1){ // 테이블의 총 행의 수와 입력한 행의 갯수가 1이 아니라면(1은 th 행)
    table.deleteRow(-1); // 합계 줄(마지막줄) 삭제
  }

  // 새 행(Row) 추가
  var newRow = table.insertRow();

  // 새 행(Row)에 Cell 추가
  var newCell1 = newRow.insertCell(0);
  var newCell2 = newRow.insertCell(1);
  var newCell3 = newRow.insertCell(2);
  var newCell4 = newRow.insertCell(3);
  var newCell5 = newRow.insertCell(4);
  var newCell6 = newRow.insertCell(5);
  var newCell7 = newRow.insertCell(6);
  var newCell8 = newRow.insertCell(7);
  var newCell9 = newRow.insertCell(8);

  //합계 셀 병합
  newCell1.colSpan = "3";

  newCell1.innerHTML = "<td><center>합계</center></td>";
  newCell2.innerHTML = "<center>"+g_sum+"</center>";                        // 학점 합계 출력
  newCell3.innerHTML = "<center>"+at_sum+"</center>";                       // 출석점수 합계 출력
  newCell4.innerHTML = "<center>"+as_sum+"</center>";                       // 과제점수 합계 출력
  newCell5.innerHTML = "<center>"+m_sum+"</center>";                        // 중간고사 합계 출력
  newCell6.innerHTML = "<center>"+f_sum+"</center>";                        // 기말고사 합계 출력
  newCell7.innerHTML = "<center>"+ (at_sum+as_sum+m_sum+f_sum)+"</center>"; // 총점 출력
  
  // 과목별 총점 구하기
  var sj_sum = new Array();

  var nCount = 0; // 빈칸의 수를 저장할 변수

  // 과목별 출석, 과제, 중간, 기말 점수 합산
  for(var i = 0; i < at_arr.length; i++){
    if(at_arr[i].value != "") // 출석 점수가 빈칸이 아니라면
      sj_sum[i] = parseInt(at_arr[i].value) +parseInt(as_arr[i].value) + parseInt(m_arr[i].value) +parseInt(f_arr[i].value);
    else{
      sj_sum[i] = ""; // 교양 과목이므로 점수 없음
      nCount++;       // 빈칸의 수 저장
    }
  }

  var sj_avg = 0; // 평균을 저장할 변수
  var sj_grade = new Array(); // 과목별 성적을 저장할 배열

  // 과목별 총점 출력
  for(var i =0; i < sj_sum.length; i++){
    if(sj_sum[i] > 100){ // 총점이 100점이 넘는다면
      alert("총점이 100점이 넘는 과목이 있습니다. 수정 후  다시 저장 해주세요.");
      return;
    }
    else if(sj_sum[i] != ""){ // 총점이 100점이 넘지 않으면서 빈칸이 아니면
      table.getElementsByTagName("tr")[i+1].getElementsByTagName("td")[8].innerHTML = "<center>"+ sj_sum[i] + "</center>";
      sj_avg += sj_sum[i]; // 총 평균을 구하기 위해 모든 과목 총점을 더해 저장
    }

    // 과목별 성적 저장
    sj_grade[i] = grade(sj_sum[i]);

    // 과목별 성적 출력
    table.getElementsByTagName("tr")[i+1].getElementsByTagName("td")[10].innerHTML = "<center>"+ sj_grade[i] + "</center>";
  }

  if(sj_sum.length == nCount){
    alert("해당 학년은 점수가 없어 총 평균과 총 성적을 구할 수 없습니다.");
    return;
  }

  sj_avg /= (sj_sum.length-nCount); // 모든 과목의 총 평균 구하기

  newCell8.innerHTML = "<center>"+ sj_avg +"</center>"; // 총 평균 출력
  newCell9.innerHTML = "<center>"+ totalGrade(g_arr, g_sum, sj_grade) +"</center>" // 총 평균 학점 출력
}