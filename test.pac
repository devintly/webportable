function FindProxyForURL(url, host) {
    // Перенаправляем nnmclub.to через прокси 0.0.0.0:2080
    if (
        shExpMatch(host, "nnmclub.to") ||          // основной домен
        shExpMatch(host, "*.nnmclub.to")           // поддомены (если есть)
    ) {
        return "PROXY 0.0.0.0:2080";  // Используем указанный прокси
    }

    // Все остальные сайты — напрямую
    return "DIRECT";
}