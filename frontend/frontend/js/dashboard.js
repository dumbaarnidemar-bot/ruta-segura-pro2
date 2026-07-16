function actualizarDashboard(resultado){

    document.getElementById("claridadScore").textContent =
        resultado.claridad + "%";

    document.getElementById("coherenciaScore").textContent =
        resultado.coherencia + "%";

    document.getElementById("cronologiaScore").textContent =
        resultado.cronologia + "%";

    document.getElementById("evidenciasScore").textContent =
        resultado.evidencias + "%";

}
