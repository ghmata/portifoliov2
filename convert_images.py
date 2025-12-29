"""
Script para converter imagens para JPG e copiar para pasta public/
"""
import os
import shutil
from pathlib import Path

# Diretórios
IMAGES_DIR = Path(r"c:\Users\gabri\OneDrive\Desktop\Freela\Portifólio - Automações\site_portifolio_2.0\images")
PUBLIC_DIR = Path(r"c:\Users\gabri\OneDrive\Desktop\Freela\Portifólio - Automações\site_portifolio_2.0\public")

# Mapeamento: projeto -> melhores imagens (nome original -> novo nome)
MAPEAMENTO = {
    # Projetos principais (carrossel)
    "CHAREC": {
        "origem": "sistema-comrec-1.png",
        "destino": "charec-main.jpg"
    },
    "DocMind": {
        "origem": "docmind1.jpeg",
        "destino": "docmind-main.jpg"
    },
    "Planbel": {
        "origem": "planbel-1.png",
        "destino": "planbel-main.jpg"
    },
    "MONA": {
        "origem": "GestaoFinanceira_1.png",
        "destino": "mona-main.jpg"
    },
    "CONCAN": {
        "origem": "concan-1.png",
        "destino": "concan-main.jpg"
    },
    # Outros projetos
    "Locamil": {
        "origem": "locamil-1.png",
        "destino": "locamil-main.jpg"
    },
    "LandingPages": {
        "origem": "LandingPage_1.png",
        "destino": "landingpages-main.jpg"
    }
}

def converter_e_copiar():
    """Converte PNG/JPEG para JPG e copia para public/"""
    
    try:
        from PIL import Image
        PIL_DISPONIVEL = True
    except ImportError:
        PIL_DISPONIVEL = False
        print("⚠️ Pillow não instalado. Copiando sem conversão...")
    
    resultados = []
    
    for projeto, config in MAPEAMENTO.items():
        origem_path = IMAGES_DIR / config["origem"]
        destino_path = PUBLIC_DIR / config["destino"]
        
        if not origem_path.exists():
            print(f"❌ {projeto}: Arquivo não encontrado - {config['origem']}")
            resultados.append((projeto, False, "Arquivo não encontrado"))
            continue
        
        try:
            if PIL_DISPONIVEL:
                # Converter para JPG usando Pillow
                img = Image.open(origem_path)
                
                # Converter para RGB se necessário (para JPEG)
                if img.mode in ('RGBA', 'LA', 'P'):
                    # Criar fundo branco para transparência
                    background = Image.new('RGB', img.size, (255, 255, 255))
                    if img.mode == 'P':
                        img = img.convert('RGBA')
                    background.paste(img, mask=img.split()[-1] if img.mode == 'RGBA' else None)
                    img = background
                elif img.mode != 'RGB':
                    img = img.convert('RGB')
                
                # Salvar como JPG com qualidade alta
                img.save(destino_path, 'JPEG', quality=90, optimize=True)
                print(f"✅ {projeto}: Convertido e copiado - {config['destino']}")
            else:
                # Sem Pillow, apenas copia (mantém extensão original)
                destino_path = PUBLIC_DIR / config["origem"]
                shutil.copy2(origem_path, destino_path)
                print(f"✅ {projeto}: Copiado (sem conversão) - {config['origem']}")
            
            resultados.append((projeto, True, str(destino_path)))
            
        except Exception as e:
            print(f"❌ {projeto}: Erro - {str(e)}")
            resultados.append((projeto, False, str(e)))
    
    return resultados

if __name__ == "__main__":
    print("🖼️ Iniciando processamento de imagens...\n")
    resultados = converter_e_copiar()
    print(f"\n✅ Processamento concluído: {sum(1 for r in resultados if r[1])}/{len(resultados)} imagens processadas")
