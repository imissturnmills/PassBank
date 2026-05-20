//field component i made in the style of
//of Kyle Simpson's objects linked to other objects pattern

var Field = {
    init: function(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.text = '';
        this.elem = document.createElement("div");
    },
    insert: function(where) {
        if (this.elem) {
            this.elem.style.width = isNaN(this.width) ? this.width : `${this.width}px`;
            // Use appendChild to add it to the DOM
            // 'where' should be a DOM element like document.body
            where.appendChild(this.elem);
        }
    }
};

//InputField "extends" the fucntionality of the field to let users input text into it
{
    var InputField = Object.create(Field);
    InputField.setup = function (width, height, label, initText) {
        this.init(width, height);

        this.labelElem = document.createElement("label");
        this.labelElem.classList.add("field-label");
        this.labelElem.textContent = label;

        this.field = document.createElement("input");
        this.field.type = "text";
        this.field.placeholder = initText;

        this.elem.appendChild(this.labelElem);
        this.elem.appendChild(this.field);

        return this;
    };

    InputField.build = function (where) {
        this.insert(where)
        this.elem.addEventListener('click', this.onClick.bind(this));
        this.elem.addEventListener('input', this.onClick.bind(this));

    }

    InputField.onClick = function (evt) {
        console.log("this field has been clicked into" + this.label);
        this.elem.style.borderColor = "blue"
    }

    InputField.onType = function (evt) {
        console.log("Current text " + evt.target.value);
    }
}

//DisplayField is purely for displaying info, in this case the user password / site its associated with

{
    var DisplayField = Object.create(Field);
    DisplayField.setup = function (width, height, label, initialVal) {
        this.init(label);

        this.labelElem = document.createElement("label");
        this.labelElem.classList.add("field-label");
        this.labelElem.textContent = label;

        this.field = document.createElement("input");
        this.field.value = initialVal;
        this.field.readOnly = true;

        this.elem.appendChild(this.labelElem);
        this.elem.appendChild(this.field);

        return this;
    };

    DisplayField.build = function (where) {
        this.insert(where)
        this.elem.addEventListener('click', this.onClick.bind(this));

    }

    DisplayField.onClick = function (evt) {
        console.log("this field has been clicked into" + this.label);
        this.elem.style.borderColor = "blue"
    }
}

