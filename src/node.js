/**
 * AST tree node constructor
 *
 * new Node('key', 'value')
 */

function Node (key = '', value = '') {
    this.key = key.trim();
    this.value = value.trim();
    this.children = this.parent = this.root = null;
}

Node.prototype.add = function add (node) {
    this.children = this.children || [];
    this.children.push(node);
    node.parent = this;
};

Node.prototype.toString = function toString() {
    const key = this.key;
    const value = this.value;
    const children = this.children;
    let childrenString = '';

    if (key && value) {
        return `${key}: ${value}`;
    } else if (this.children) {
        childrenString = children
            .map((node) => {
                return node.toString();
            }).join(', ');

        return key ? `${key}: { ${childrenString} }` : childrenString;
    } else {
        return '';
    }
};

export default Node;