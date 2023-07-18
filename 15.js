// 商品クラスの生成
class Item {
    // コンストラクタ
    constructor(id, name, stock) {
        //　引数の値を使ってプロパティの初期化を行う
        this.id = id;       // 商品ID
        this.name = name;   // 商品名
        this.stock = stock; // 在庫数
    }
}

class chair extends Item {
    constructor(id, name, stock, status) {
        //　引数の値を使ってプロパティの初期化を行う
        super(id, name, stock);
        this.status = status;           //　ベッドのサイズ
    }
}

let chair1 = new Bed('0001', 'ソファチェア', 100, '新品');
let chair2 = new Bed('0002', 'シングルチェアド', 100, 'a級');
let chair3 = new Bed('0003', '子ども用チェア', 10, 'c級');