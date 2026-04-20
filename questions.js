const questionBank = [
  // 演算法 25 題
  {id:'ALG-01', cat:'演算法', text:'演算法步驟不能有兩種以上的解釋，才能依照演算法轉成程式碼。這是在考演算法的哪一種特性？', options:['有限性','明確性','輸出','正確性'], answer:1, exp:'不能有模糊或多重解讀，考的是明確性。'},
  {id:'ALG-02', cat:'演算法', text:'下列程式中 x++ 共執行幾遍？', code:'for(i=1;i<=n;i++)\n  for(j=i;j<=n;j++)\n    for(k=j;k<=n;k++)\n      x++;', options:['n*n','n*(n+1)*(n+2)/6','n*n*n','n'], answer:1, exp:'這是三重三角型累加，總次數為 n(n+1)(n+2)/6。'},
  {id:'ALG-03', cat:'演算法', text:'Quick Sort 的時間複雜度為？', options:['n^3','log(n)','n','n*log(n)'], answer:3, exp:'題目通常考平均時間複雜度，Quick Sort 常見答案為 O(n log n)。'},
  {id:'ALG-04', cat:'演算法', text:'以下程式的複雜度為何？', code:'def F(n):\n    if n == 0 or n == 1:\n        return 1\n    else:\n        return F(n-1) + F(n-2)', options:['O(2^n)','O(n*log(n))','O(n)','O(n^2)'], answer:0, exp:'這是未記憶化的 Fibonacci 遞迴，呼叫樹呈指數成長。'},
  {id:'ALG-05', cat:'演算法', text:'下列程式中 x++ 共執行幾遍？', code:'for(i=1;i<=n;i++)\n  for(j=1;j<=n;j++)\n    for(k=1;k<=n;k++)\n      x++;', options:['∞','n*n*n','n*(n-1)/2','n*(n+1)*(n+2)/6'], answer:1, exp:'三層獨立迴圈，總次數 n^3。'},
  {id:'ALG-06', cat:'演算法', text:'何者的 CPU 執行效率最高？', options:['i+=1','i=i+2-1','i=i+1','i++'], answer:3, exp:'教材標準答案通常選 i++。'},
  {id:'ALG-07', cat:'演算法', text:'對於資料結構的敘述何者錯誤？', options:['每一種資料結構儲存容器都有其特性，應依問題選擇適合的資料結構','資料結構為電腦儲存與操作資料的方式','資料結構只需要提供儲存資料的空間，不需要提供操作容器的功能','資料結構包含儲存容器、新增資料、讀取資料、刪除資料與搜尋資料'], answer:2, exp:'資料結構不只儲存，也要支援操作。'},
  {id:'ALG-08', cat:'演算法', text:'如果一個程式的計算次數為 0.1n^2 + 10n + 3，n 為輸入資料個數，則其 Big-O 為？', options:['O(n^2)','O(n*log(n))','O(n)','O(2^n)'], answer:0, exp:'保留最高次項，忽略常數與低次項。'},
  {id:'ALG-09', cat:'演算法', text:'何者非遞迴函式中所一定要處理的？', options:['程式本體','區域變數','所傳入的參數','終止條件'], answer:1, exp:'終止條件通常必要，區域變數不一定必要。'},
  {id:'ALG-10', cat:'演算法', text:'迴圈中初始值設定之程式碼，在遞迴寫法中應寫在？', options:['Stop Criteria','傳回值','主程式','Stop Criteria 以外'], answer:2, exp:'遞迴的初始值通常在主程式第一次呼叫時傳入。'},
  {id:'ALG-11', cat:'演算法', text:'【log(n^2)+log(2^n)】之 Θ( ) 為？', options:['n','n*log(n)','n^3','n!'], answer:0, exp:'log(n^2)=2logn，log(2^n)=nlog2，主導項為 n。'},
  {id:'ALG-12', cat:'演算法', text:'Big-O 通常用來衡量哪種情境下的時間複雜度？', options:['Overall Case','Worst Case','Average Case','Best Case'], answer:1, exp:'教材中通常以最壞情況來說明 Big-O。'},
  {id:'ALG-13', cat:'演算法', text:'遞迴程式碼中 Stop Criteria 以外的部分，相當於迴圈中的？', options:['初始值設定','遞增','終止條件','程式本體'], answer:3, exp:'Stop Criteria 以外就是每次真正執行的主體。'},
  {id:'ALG-14', cat:'演算法', text:'下列哪個縮寫的定義採用了 Recursive 定義方式？', options:['GNU','GCC','RAM','IPO'], answer:0, exp:'GNU = GNU\'s Not Unix，是遞迴式定義。'},
  {id:'ALG-15', cat:'演算法', text:'【n^3 + (8^10)*(n^2)】之 Θ( ) 為？', options:['n*log(n)','n^3','n!','n'], answer:1, exp:'8^10 是常數，主導項為 n^3。'},
  {id:'ALG-16', cat:'演算法', text:'如果一個程式的時間複雜度為 O(n^3)，當資料量變為原來的 10 倍時，執行時間變為原來的幾倍？', options:['10000','100','10','1000'], answer:3, exp:'(10n)^3 = 1000n^3。'},
  {id:'ALG-17', cat:'演算法', text:'若 A[]={2,4,6,8,10,12,14,16,18,20}; 且 x=10，則程式中【k=i+j>>1;】共執行幾遍？', code:'i=0; j=9; do {\n  k=i+j>>1;\n  if(x < A[k]) j=k-1;\n  else if(x > A[k]) i=k+1;\n  else break;\n} while(i<=j);', options:['1','4','2','3'], answer:0, exp:'第一次就算出 k=4，A[4]=10，直接命中。'},
  {id:'ALG-18', cat:'演算法', text:'下列程式中 x++ 共執行幾遍？', code:'for(i=1;i<=n;i++) {\n  j=i;\n  for(k=j+1;k<=n;k++)\n    x++;\n}', options:['n','∞','n*(n-1)/2','n*(n+1)*(n+2)/6'], answer:2, exp:'每輪次數是 n-i，總和為 (n-1)+(n-2)+...+1 = n(n-1)/2。'},
  {id:'ALG-19', cat:'演算法', text:'演算法要能完成所需功能或解決問題，錯誤的演算法就需要修正。這是在考演算法的哪一種特性？', options:['輸出','有限性','正確性','明確性'], answer:2, exp:'能不能真的正確解題，考的是正確性。'},
  {id:'ALG-20', cat:'演算法', text:'如果一個演算法計算次數為 2n+3，n 為輸入資料個數，則其 Big-O 複雜度為何？', options:['O(n)','O(n^2)','O(2^n)','O(n*log(n))'], answer:0, exp:'保留最高次項，2n+3 的主導項是 n。'},
  {id:'ALG-21', cat:'演算法', text:'【n^1.001 + n*log(n)】之 Θ( ) 為？', options:['n','n*log(n)','n^3','n!'], answer:1, exp:'依照教材選項通常會落在 nlogn 這一層；若嚴格數學比較，n^1.001 最終會大於 nlogn。'},
  {id:'ALG-22', cat:'演算法', text:'下列程式中 x++ 共執行幾遍？', code:'for(i=1;i<=n;i++)\n  for(j=1;j<=n;j++)\n    x++;', options:['n*n','n*n*n','∞','n*(n-1)/2'], answer:0, exp:'雙層獨立迴圈，總次數 n^2。'},
  {id:'ALG-23', cat:'演算法', text:'若 A[]={2,4,6,8,10,12,14,16,18,20}; 且 x=4，則程式中【k=i+j>>1;】共執行幾遍？', code:'i=0; j=9; do {\n  k=i+j>>1;\n  if(x < A[k]) j=k-1;\n  else if(x > A[k]) i=k+1;\n  else break;\n} while(i<=j);', options:['3','2','1','4'], answer:1, exp:'第一次 k=4，第二次 k=1 命中，所以共 2 次。'},
  {id:'ALG-24', cat:'演算法', text:'Fibonacci 數列的後 1 個數除以前 1 個數，所得結果會趨近於？', options:['圓周率','尤拉數','2 開根號','黃金比例'], answer:3, exp:'Fibonacci 相鄰項比值會趨近黃金比例。'},
  {id:'ALG-25', cat:'演算法', text:'有關遞迴與迴圈的比較，何者錯誤？', options:['遞迴程式中需指定 Stop Criteria，否則會造成無窮遞迴','遞迴的寫法中，只需告知前後筆資料間的關係，無須注意迴圈的細節','撰寫遞迴程式前，需先將前後筆資料間的關聯式釐清','遞迴的寫法是一種以空間換取時間的策略'], answer:3, exp:'遞迴通常會增加 call stack 空間，但不一定比較快。'},

  // Python 第02章 1-18
  {id:'PY2-01', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"sportlist = ['棒球','籃球','足球','桌球','曲棍球']\nsportlist.insert(3, '壘球')\nprint(sportlist[3])", options:['籃球','足球','桌球','壘球'], answer:3, exp:'insert(3, x) 會把元素插進索引 3，所以 sportlist[3] 是壘球。'},
  {id:'PY2-02', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"d1={'公車':'bus','火車':'train','飛機':'plane'}\nd2={'汽車':'car','飛機':'airplane'}\nd1.update(d2)\nprint(d1['飛機'])", options:['發出 KeyError 的錯誤訊息','plane','car','airplane'], answer:3, exp:'update 會用 d2 覆蓋同名 key，所以 飛機 變成 airplane。'},
  {id:'PY2-03', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = list('abcdefghijk')\nprint(a[6:])", options:["['g', 'h', 'i', 'j', 'k']","['a', 'b', 'c', 'd', 'e', 'f', 'g']","['h', 'i', 'j', 'k']","['i', 'j', 'k']"], answer:0, exp:'切片從索引 6 到最後。'},
  {id:'PY2-04', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = list('abcdefghijk')\nprint(a[-3:])", options:["['i', 'j', 'k']","['a', 'b', 'c', 'd', 'e', 'f', 'g']","['h', 'i', 'j', 'k']","['g', 'h', 'i', 'j', 'k']"], answer:0, exp:'-3 代表倒數第 3 個，也就是 i。'},
  {id:'PY2-05', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = list('abcdefghijk')\nprint(a[:6])", options:["['a', 'b', 'c']","['a', 'b', 'c', 'd', 'e', 'f']","['a', 'b', 'c', 'd']","['a', 'b', 'c', 'd', 'e']"], answer:1, exp:'不含索引 6，所以取到 f。'},
  {id:'PY2-06', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = list('abcdefghijk')\nprint(a[-3:-6:-2])", options:["['i', 'g']","['j', 'i', 'h']","['h', 'i', 'j']","['j', 'h']"], answer:0, exp:'從 -3 開始往回每次跳 2，取到 i、g。'},
  {id:'PY2-07', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = [1,2,3,4]\nsum = 0\nfor item in a:\n    sum = sum + item\nprint(sum)", options:['1','6','3','10'], answer:3, exp:'1+2+3+4=10。'},
  {id:'PY2-08', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"d={'公車':'bus','火車':'train','汽車':'car','腳踏車':'bicycle'}\nprint(d.get('機車','不在字典內'))", options:['發出 KeyError 的錯誤訊息','car','不在字典內','train'], answer:2, exp:'get 找不到 key 時回傳預設值。'},
  {id:'PY2-09', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = set('tree')\nb = set('care')\nprint(a & b)", options:["{'t', 'r', 'e'}","{'a', 'c', 't', 'r', 'e'}","{'r', 'e'}","{'c', 'a', 'e', 'r'}"], answer:2, exp:'& 是集合交集，共同元素為 r、e。'},
  {id:'PY2-10', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = [1, 2, 3, 4]\nsum = 0\ndel a[1]\nfor item in a:\n    sum = sum + item\nprint(sum)", options:['8','5','10','3'], answer:0, exp:'刪掉 a[1] 之後變成 [1,3,4]，總和 8。'},
  {id:'PY2-11', cat:'Python 第02章', text:'以下程式碼輸出結果為何？（教材觀念題）', code:"s = {1, 3, 'a', 'a'}\nprint(s)", options:["{'a','a'}","{1, 3, 'a'}","{1, 3}","{1, 3, 'a', 'a'}"], answer:1, exp:'set 會自動去除重複元素。教材截圖中的 set 寫法不標準，這裡用其想考的觀念處理。'},
  {id:'PY2-12', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"sportlist = ['棒球','籃球','足球','桌球','曲棍球']\nsportlist.pop(-1)\nprint(sportlist)", options:["['棒球', '籃球', '足球', '桌球']","['棒球', '籃球', '足球', '桌球', '']","['', '籃球', '足球', '桌球', '曲棍球']","['籃球', '足球', '桌球', '曲棍球']"], answer:0, exp:'pop(-1) 會刪掉最後一個元素。'},
  {id:'PY2-13', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"d={'公車':'bus','火車':'train','汽車':'car','腳踏車':'bicycle'}\nd['飛機']='airplane'\nprint(d['飛機'])", options:['airplane','發出 KeyError 的錯誤訊息','不在字典內','bus'], answer:0, exp:'先新增再取值。'},
  {id:'PY2-14', cat:'Python 第02章', text:'只有一個元素的 tuple 應該如何宣告？', options:['[2]','{2}','(2)','(2,)'], answer:3, exp:'單元素 tuple 的關鍵是逗號。'},
  {id:'PY2-15', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:'a = 10\nb = 20\nc = 30\na, b = b, a\na, c = c, a\nprint(a)', options:['20','30','0','10'], answer:1, exp:'先交換 a,b 後 a=20；再交換 a,c 後 a=30。'},
  {id:'PY2-16', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"sportlist = ['棒球','籃球','足球']\nsportlist.append('壘球')\nprint(sportlist)", options:["['棒球', '籃球', '壘球']","['棒球', '籃球', '足球', '壘球']","['籃球', '足球', '壘球']","['壘球', '棒球', '籃球', '足球']"], answer:1, exp:'append 會加到尾端。'},
  {id:'PY2-17', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"d={'公車':'bus','火車':'train','汽車':'car','腳踏車':'bicycle'}\nprint(d['汽車'])", options:['car','bus','train','bicycle'], answer:0, exp:'以 key 取 value。'},
  {id:'PY2-18', cat:'Python 第02章', text:'以下程式碼輸出結果為何？', code:"a = list('abcd')\nprint(a[::-1])", options:["['d', 'c', 'b', 'a']","['a', 'b', 'c']","['c', 'b', 'a']","['a', 'b', 'c', 'd']"], answer:0, exp:'[::-1] 代表反轉。'},

  // 第03-04章 1-20（依使用者提供標準答案）
  {id:'DS-01', cat:'第03-04章', text:'linked list：head -> 5 -> 3 -> 2 -> 6。若執行 print(self.head.next.next.data)，顯示結果為何？', options:['2','6','3','5'], answer:0, exp:'從 head 的 5 往後兩格會到 2。'},
  {id:'DS-02', cat:'第03-04章', text:'求 fib[5] 其值為？', code:'fib = [0]*10\nfib[0] = 1\nfib[1] = 2\nfor i in range(2,10):\n    fib[i] = fib[i-1] + fib[i-2]', options:['8','21','13','5'], answer:2, exp:'依序得到 1,2,3,5,8,13，所以 fib[5]=13。'},
  {id:'DS-03', cat:'第03-04章', text:'單向 linked list 刪除節點 x 時，空格應填哪一行？', code:'tmp = self.head\nwhile tmp != None:\n    if tmp.data == x:\n        break\n    before = tmp\n    tmp = tmp.next\nif tmp == self.head:\n    self.head = self.head.next\nelse:\n    ________', options:['before = tmp.next','before.next = tmp','tmp.next = tmp','before.next = tmp.next'], answer:3, exp:'刪除非首節點時，要讓前一個節點直接接到被刪節點的下一個節點。'},
  {id:'DS-04', cat:'第03-04章', text:'雙向 linked list 在節點 y 後插入 x，空格應填哪一行？', code:'nodex.next = tmp.next\nnodex.pre = tmp\n________\ntmp.next = nodex', options:['nodex.next = tmp.next','tmp.next = nodex','tmp = nodex','tmp.next.pre = nodex'], answer:3, exp:'後方節點的 pre 也要回指到新插入節點。'},
  {id:'DS-05', cat:'第03-04章', text:'以下程式執行結束後，B 等於？', code:'A = [2,3,4,5,6]\nB = A[1] + A[3]', options:['9','6','8','10'], answer:2, exp:'A[1]=3，A[3]=5，所以 B=8。'},
  {id:'DS-06', cat:'第03-04章', text:'若 char A[m][n]，且 &A[3][2]=1110；&A[2][3]=1115，則 &A[0][0] = ?', options:['1090','1125','1120','1095'], answer:3, exp:'以使用者提供的標準答案為準。'},
  {id:'DS-07', cat:'第03-04章', text:'環狀 linked list 在節點 y 後插入節點 x，空格應填哪一行？', code:'tmp = self.head\nnodex = Node(x)\nwhile True:\n    if tmp.data == y:\n        break\n    tmp = tmp.next\n________\ntmp.next = nodex', options:['nodex.next = tmp','tmp = nodex','tmp.next = nodex','nodex.next = tmp.next'], answer:3, exp:'插入後 x 的 next 應先接到原本 y 的 next。'},
  {id:'DS-08', cat:'第03-04章', text:'有關單向 linked list 與雙向 linked list 的比較，何者錯誤？', options:['雙向 linked list 因為多了一個指標，所以在加入、刪除時，會變得較複雜','雙向 linked list 因為多了一個指標，所以較浪費空間','單向 linked list 的指標遺失時，可適時的復原','使用雙向 linked list 來實作佇列功能時，其時間效率比單向 linked list 好'], answer:2, exp:'依使用者提供標準答案，錯誤的是 C。'},
  {id:'DS-09', cat:'第03-04章', text:'若 char A[m][n]，且 &A[3][2]=1110；&A[2][3]=1115，則 n = ?', options:['不可知','3','5','6'], answer:0, exp:'依使用者提供標準答案為 A。'},
  {id:'DS-10', cat:'第03-04章', text:'linked list：head -> 5 -> 3 -> 2 -> 6。若執行 print(self.head.next.data)，顯示結果為何？', options:['2','3','5','6'], answer:1, exp:'head.next 指向 3。'},
  {id:'DS-11', cat:'第03-04章', text:'程式碼如下，請問 myArray[8] 表示是陣列 myArray 的第幾個元素？', code:'myArray = [0] * 10\nmyArray[8] = 1', options:['7','8','9','10'], answer:2, exp:'索引從 0 開始，所以索引 8 是第 9 個元素。'},
  {id:'DS-12', cat:'第03-04章', text:'請問 myArray[2][3] 表示是陣列 myArray 的第幾列第幾行的元素？', code:'myArray = [[0]*4 for i in range(5)]\nmyArray[2][3] = 1', options:['2,3','2,4','3,4','3,3'], answer:2, exp:'索引從 0 開始，[2][3] 即第 3 列第 4 行。'},
  {id:'DS-13', cat:'第03-04章', text:'有關 linked list 與陣列的比較，何者錯誤？', options:['兩個不同之陣列若有共同的子串列時，可以共用此子串列以節省空間，然而 linked list 則不行','linked list 要加入或刪除一個節點時，只需改變指標即可','陣列要加入或刪除一個節點時，可能需要移動其他節點到別的位置','linked list 需要額外的空間來儲存指標，比陣列浪費空間'], answer:0, exp:'依使用者提供標準答案為 A。'},
  {id:'DS-14', cat:'第03-04章', text:'程式碼如下，請問執行完後 B 等於？', code:'A = [[2,3,4], [5,6,7]]\nB = A[1][1] + A[1][2]', options:['1','13','5','7'], answer:1, exp:'6+7=13。'},
  {id:'DS-15', cat:'第03-04章', text:'雙向 linked list 刪除節點 x 時，空格應填哪一行？', code:'if self.head != None:\n    tmp.pre.next = tmp.next\n    ________', options:['tmp.next = tmp.pre','tmp = tmp.next.pre','tmp.next.pre = tmp','tmp.next.pre = tmp.pre'], answer:3, exp:'刪除節點時，後方節點的 pre 要回接到前方節點。'},
  {id:'DS-16', cat:'第03-04章', text:'若 A[-3~1][-2~3][0~2] 為 column-major 之 3 維 byte 陣列，若 &A[-3][-2][0]=100，則 &A[1][3][2] = ?', options:['100+4+5*(5)+2*(6*5)','100+4*(6*3)+5*(3)+2','100+1*(3*2)+3*(2)+2','100+1+3*(1)+2*(3*1)'], answer:0, exp:'依使用者提供標準答案為 A。'},
  {id:'DS-17', cat:'第03-04章', text:'若 char A[m][n]，且 &A[3][2]=1110；&A[2][3]=1115，則 &A[1][4] = ?', options:['1090','1125','1095','1120'], answer:3, exp:'依使用者提供標準答案為 D。'},
  {id:'DS-18', cat:'第03-04章', text:'下列關於 linked list 的敘述何者正確？', options:['適合用於插入與刪除資料','佔用連續記憶體空間','比陣列節省記憶體空間','支援索引值(Index)存取'], answer:0, exp:'linked list 的優勢是插入刪除方便，不需連續記憶體，也不支援直接索引。'},
  {id:'DS-19', cat:'第03-04章', text:'存取陣列的第一個元素時，其索引值為？', options:['1','2','0','3'], answer:2, exp:'陣列索引由 0 開始。'},
  {id:'DS-20', cat:'第03-04章', text:'若 &A[0][0]=0x1204（16 進位），&A[2][2]=0x1244，則 &A[3][3]= ?', options:['0x1240','0x1284','0x1264','0x1200'], answer:2, exp:'依題型推得答案為 0x1264。'}
];

let currentPool = [];
let currentIndex = 0;
let score = 0;
let wrong = 0;
let answeredMap = new Map();
let wrongIds = new Set(JSON.parse(localStorage.getItem('quiz_wrong_ids') || '[]'));
let mode = 'all';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function resetPool() {
  const base = mode === 'wrong' ? questionBank.filter(q => wrongIds.has(q.id)) : questionBank;
  currentPool = shuffle(base);
  currentIndex = 0;
  score = 0;
  wrong = 0;
  answeredMap = new Map();
  document.getElementById('summaryBox').classList.remove('show');
  document.getElementById('quizCard').style.display = currentPool.length ? 'block' : 'block';
  render();
}

function updateHeader() {
  const done = answeredMap.size;
  const total = currentPool.length;
  const acc = done ? Math.round(score / done * 100) : 0;
  document.getElementById('totalCount').textContent = total;
  document.getElementById('progressText').textContent = `${Math.min(currentIndex + 1, total)} / ${total}`;
  document.getElementById('correctCount').textContent = score;
  document.getElementById('wrongCount').textContent = wrong;
  document.getElementById('accuracy').textContent = `${acc}%`;
  document.getElementById('bar').style.width = total ? `${(done / total) * 100}%` : '0%';
}

function render() {
  updateHeader();
  const q = currentPool[currentIndex];
  const qtext = document.getElementById('qtext');
  const qcode = document.getElementById('qcode');
  const optionsBox = document.getElementById('options');
  const feedback = document.getElementById('feedback');
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');

  if (!q) {
    showSummary();
    return;
  }

  document.getElementById('qid').textContent = q.id;
  document.getElementById('qcat').textContent = q.cat;
  qtext.textContent = q.text;
  if (q.code) {
    qcode.style.display = 'block';
    qcode.textContent = q.code;
  } else {
    qcode.style.display = 'none';
    qcode.textContent = '';
  }

  optionsBox.innerHTML = '';
  feedback.className = 'feedback';
  feedback.textContent = '';
  nextBtn.disabled = !answeredMap.has(q.id);
  prevBtn.disabled = currentIndex === 0;

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${opt}`;
    if (answeredMap.has(q.id)) {
      btn.disabled = true;
      const selected = answeredMap.get(q.id);
      if (idx === q.answer) btn.classList.add('correct');
      if (idx === selected && selected !== q.answer) btn.classList.add('wrong');
    }
    btn.onclick = () => answerQuestion(idx);
    optionsBox.appendChild(btn);
  });

  if (answeredMap.has(q.id)) {
    const selected = answeredMap.get(q.id);
    const isCorrect = selected === q.answer;
    feedback.className = `feedback ${isCorrect ? 'ok' : 'bad'}`;
    feedback.textContent = `${isCorrect ? '答對了。' : '答錯了。'} 正確答案：${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}\n解析：${q.exp}`;
  }
}

function answerQuestion(selected) {
  const q = currentPool[currentIndex];
  if (answeredMap.has(q.id)) return;
  answeredMap.set(q.id, selected);
  if (selected === q.answer) {
    score += 1;
    wrongIds.delete(q.id);
  } else {
    wrong += 1;
    wrongIds.add(q.id);
  }
  localStorage.setItem('quiz_wrong_ids', JSON.stringify([...wrongIds]));
  render();
  document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
  if (currentIndex < currentPool.length - 1) {
    currentIndex += 1;
    render();
  } else {
    showSummary();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex -= 1;
    render();
  }
}

function showSummary() {
  document.getElementById('quizCard').style.display = currentPool.length ? 'block' : 'none';
  const total = currentPool.length;
  const done = answeredMap.size;
  const acc = done ? Math.round(score / done * 100) : 0;
  const summary = document.getElementById('summaryBox');
  const wrongList = document.getElementById('wrongList');
  const wrongQs = currentPool.filter(q => answeredMap.has(q.id) && answeredMap.get(q.id) !== q.answer);
  document.getElementById('summaryText').textContent = `本輪共 ${total} 題，已作答 ${done} 題，答對 ${score} 題，答錯 ${wrong} 題，正確率 ${acc}%。`;
  wrongList.innerHTML = '';
  if (wrongQs.length === 0) {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.textContent = '這輪沒有錯題。';
    wrongList.appendChild(div);
  } else {
    wrongQs.forEach(q => {
      const div = document.createElement('div');
      div.className = 'list-item';
      div.textContent = `${q.id}｜${q.text}｜正確答案：${String.fromCharCode(65 + q.answer)}. ${q.options[q.answer]}`;
      wrongList.appendChild(div);
    });
  }
  summary.classList.add('show');
}

document.getElementById('nextBtn').onclick = nextQuestion;
document.getElementById('prevBtn').onclick = prevQuestion;
document.getElementById('restartBtn').onclick = () => { mode = 'all'; resetPool(); };
document.getElementById('wrongModeBtn').onclick = () => { mode = 'wrong'; resetPool(); };
document.getElementById('allModeBtn').onclick = () => { mode = 'all'; resetPool(); };
document.getElementById('retryWrongBtn').onclick = () => { mode = 'wrong'; resetPool(); };
document.getElementById('retryAllBtn').onclick = () => { mode = 'all'; resetPool(); };

resetPool();