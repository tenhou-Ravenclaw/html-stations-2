function displayList() {
    // fruits div内のすべてのpタグのテキストを取得
    const fruitElements = document.querySelectorAll('#fruits p');

    // 文字列の配列に変換
    const fruits = Array.from(fruitElements).map(element => element.textContent);

    // リスト要素を作成
    const ul = document.createElement('ul');
    fruits.forEach(fruit => {
        const li = document.createElement('li');
        li.textContent = fruit;
        ul.appendChild(li);
    });

    // 既存のfruitsの中身を空にして、新しいリストを追加
    const fruitsDiv = document.getElementById('fruits');
    fruitsDiv.innerHTML = '';
    fruitsDiv.appendChild(ul);
}