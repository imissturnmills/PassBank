var Field = {
    init: function(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.text = '';
        this.elem = document.createElement("div");
    },
    insert: function(where) {
        if (this.elem) {
            this.elem.style.width = `${this.width}px`;
            this.elem.style.height = `${this.height}px`;

            // Use appendChild to add it to the DOM
            // 'where' should be a DOM element like document.body
            where.appendChild(this.elem);
        }
    }
};

var InputField = Object.create(Field);
InputField.setup = function(width, height, label) {
    this.init(width, height);
    this.label = label || ' ';
    this.elem = document.createElement("input");
    this.elem.type = "text";
};

InputField.Build = function(where) {
    this.insert(where)
    this.elem.addEventListener('click', this.onClick.bind(this));
}

Button.onClick = function(evt) {

}

