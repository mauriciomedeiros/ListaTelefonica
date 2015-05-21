angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function($scope, $filter){
	$scope.app = "Lista Telefonica"
	$scope.contatos = [
		{nome: $filter('uppercase')("Mauricio"), telefone: "9999-8888", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}},
		{nome: "Monica", telefone: "9999-8877", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"}},
		{nome: "Pedro", telefone: "9999-8866", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"}}
	];
	$scope.operadoras = [
		{nome: "Oi", codigo: 14, categoria: "Celular", preco: 1},
		{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 2},
		{nome: "Tim", codigo: 41, categoria: "Celular", preco: 1},
		{nome: "Gvt", codigo: 25, categoria: "Fixo", preco: 3},
		{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
	];

	$scope.adicionarContato = function (contato) {
		contato.data = new Date();
		$scope.contatos.push(angular.copy(contato));
		delete $scope.contato;
		$scope.contatoForm.$setPristine();
	};
	$scope.apagarContatos = function (contatos){
		$scope.contatos = contatos.filter(function (contato){
			if(!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function(contatos){
		return contatos.some(function (contato){
			return contato.selecionado;
		});
	};
	$scope.ordenaPor = function(campo){
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};
});