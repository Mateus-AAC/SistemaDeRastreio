const { rastrearEncomendas } = require('correios-brasil');

const rastrearController = {
    principal: (req, res) => {
        res.render('rastrearPedidos', { eventos: null, mensagem: null });
    },

    rastrearPedidos: async (req, res) => {
        let codigo = req.query.c;

        try {
            if (!codigo || codigo.trim() === '') {
                res.render('rastrearPedidos', { eventos: null, mensagem: 'Por favor, informe um código de rastreamento válido.' });
                return;
            }

            let codigosRastreio = codigo.split(',');
            const response = await rastrearEncomendas(codigosRastreio);
            
            if (response && response.length > 0 && response[0].eventos) {
                const dadosDaEntrega = response[0].eventos.reverse();
                res.render('rastrearPedidos', { eventos: dadosDaEntrega, mensagem: null });
            } else {
                res.render('rastrearPedidos', { eventos: null, mensagem: 'Código de rastreamento inválido ou nenhum evento encontrado.' });
            }
        } catch (error) {
            console.error("Erro ao rastrear encomendas:", error);
            res.render('rastrearPedidos', { eventos: null, mensagem: 'Ocorreu um erro ao rastrear a encomenda.' });
        }
    }
};

module.exports = rastrearController;