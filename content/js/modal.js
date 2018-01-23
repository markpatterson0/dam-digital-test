$(document).ready(function () {

    $('#deleteModal').on('show.bs.modal', function (event) {
        var $cardDeleteButton = $(event.relatedTarget);
        var $column = $cardDeleteButton.closest('.column');

        deleteCard(this, $column);
    });

    function deleteCard(_this, $column) {
        var $modal = $(_this);
        var $modalDeleteButton = $modal.find('.btn-delete-js');

        $modalDeleteButton.on('click', function (event) {
            $column.remove();
            $modal.modal('hide');
        });
    }

});