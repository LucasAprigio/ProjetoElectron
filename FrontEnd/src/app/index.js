const menuData = [
    {
        label: 'Arquivo',
        subMenu: [
            { label: 'Cadastro de Clientes', link:'pages/client/client.html' },
            { label: 'Cadastro de Funcionários', link:'pages/employee/employee.html' },
            { label: 'Cadastro de Produtos', link:'pages/product/product.html' }
        ]
    },
    {
        label: 'Sistema',
        subMenu: [
            { label: 'Versão', link:'pages/version/version.html' },
            { label: 'Contato', link:'pages/contact/contact.html' },
            { label: 'Sobre nós', link:'pages/about/about.html' }
        ]
    },
    {
        label: 'Fechar',
        link: 'close'
    }
];

function openWindow(link){
    if(link === 'close') window.close();

    const win = window.open(link, '_blank', `width=800,height=600,resizable=false,autoHideMenuBar=true`)
}

const menuElement = document.getElementById('menu');

menuData.forEach(item=>{
    const li = document.createElement('li');
    const a = document.createElement('a');
    
    
    a.textContent = item.label;
    li.appendChild(a);

    if(item.subMenu){
        const ul = document.createElement('ul');        
        item.subMenu.forEach(subItem=>{
            const subLi = document.createElement('li');
            const subA = document.createElement('a');

            subA.textContent = subItem.label;
            subA.onclick = () => this.openWindow(subItem.link);           
            subLi.appendChild(subA);
            ul.appendChild(subLi);
        });

        li.appendChild(ul);
    }else{
        a.onclick = () => this.openWindow(item.link);
    }

    menuElement.appendChild(li);
});