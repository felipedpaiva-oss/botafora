#!/usr/bin/env python3
"""Otimiza fotos/vídeos para o site: redimensiona, remove metadados (inclusive GPS).

Uso: python3 ferramentas/otimizar_midia.py <id-do-item> <arquivo1> [arquivo2 ...]
Saída: midia/<id-do-item>/01.jpg, 02.jpg, 03.mp4 ... (continua a numeração existente)
"""
import subprocess, sys
from pathlib import Path
from PIL import Image, ImageOps

FOTO_MAX = 1600      # lado maior, em px
VIDEO_ALTURA = 720   # p

def proximo_numero(pasta: Path) -> int:
    nums = [int(p.stem) for p in pasta.iterdir() if p.stem.isdigit()]
    return max(nums, default=0) + 1

def foto(orig: Path, dest: Path):
    img = ImageOps.exif_transpose(Image.open(orig)).convert("RGB")
    img.thumbnail((FOTO_MAX, FOTO_MAX))
    img.save(dest, "JPEG", quality=80, optimize=True, progressive=True)  # sem EXIF

def video(orig: Path, dest: Path):
    subprocess.run([
        "ffmpeg", "-y", "-loglevel", "error", "-i", str(orig),
        "-vf", f"scale=-2:'min({VIDEO_ALTURA},ih)'", "-c:v", "libx264", "-crf", "28",
        "-preset", "slow", "-c:a", "aac", "-b:a", "96k", "-movflags", "+faststart",
        "-map_metadata", "-1", str(dest)], check=True)

def main():
    item, arquivos = sys.argv[1], [Path(a) for a in sys.argv[2:]]
    pasta = Path(__file__).resolve().parent.parent / "midia" / item
    pasta.mkdir(parents=True, exist_ok=True)
    n = proximo_numero(pasta)
    for a in arquivos:
        eh_video = a.suffix.lower() in {".mp4", ".mov", ".m4v", ".3gp", ".webm", ".mkv"}
        dest = pasta / f"{n:02d}.{'mp4' if eh_video else 'jpg'}"
        (video if eh_video else foto)(a, dest)
        print(f"{dest.relative_to(pasta.parent.parent)}  {dest.stat().st_size // 1024} KB")
        n += 1

if __name__ == "__main__":
    main()
