
AFRAME.registerComponent('change-size', {
    schema: {
        x: { default: 1 },
        y: { default: 1 },
        z: { default: 1 }
    },
    init: function () {
        this.el.addEventListener('model-loaded',() => {
            const obj3d = this.el.getObject3D('mesh');
            console.log(obj3d)
            if (obj3d) {
                obj3d.scale.set(this.data.x, this.data.y, this.data.z);
            }
        });
        
    }

});


let size = 1;
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

AFRAME.registerComponent('select-and-change-color', {
    schema: { color: { default: 'black' } },
    init: function () {
        let data = this.data;
        let el = this.el;
        //add event
        el.addEventListener('click', (e) => {
            // Grab the mesh / scene.
            const obj = this.el.getObject3D('mesh');

            // Go over the submeshes and modify materials we want.
            let color = getRandomColor();
            obj.traverse(node => {
                if (node && node.material) {
                    node.material.color.set(color);
                }
            });
        });

        el.addEventListener('model-loaded', (e) => {
            let mesh = el.getObject3D('mesh').children[0];
            // Tạo texture từ hình ảnh
            var textureLoader = new THREE.TextureLoader();
            textureLoader.load('./negx.jpg', function (texture) {
                // Sử dụng texture để tạo vật liệu phản chiếu
                var material = new THREE.MeshBasicMaterial({ map: texture });

                // Gán vật liệu mới cho mesh
                mesh.traverse(node => {
                    if (node.isMesh) {
                        node.material = material;
                    }
                });
            });
        })
    },
    update: function () { },
    tick: function () { },
    remove: function () { },
    pause: function () { },
    play: function () { }
});