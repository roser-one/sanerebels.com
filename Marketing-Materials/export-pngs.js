/**
 * SVG to PNG Export Script
 * 
 * Converts all marketing SVGs to PNG at various resolutions.
 * Run: npm install @resvg/resvg-js && node export-pngs.js
 */

const { Resvg } = require("@resvg/resvg-js");
const fs = require("fs");
const path = require("path");

// Configuration for all SVGs to export
const exportConfigs = [
    // Social Media
    {
        input: "social/linkedin-banner.svg",
        outputs: [
            { name: "linkedin-banner", width: 1584, height: 396 },
            { name: "linkedin-banner@2x", width: 3168, height: 792 },
        ],
    },
    {
        input: "social/linkedin-profile.svg",
        outputs: [
            { name: "linkedin-profile-400", width: 400, height: 400 },
            { name: "linkedin-profile-300", width: 300, height: 300 },
            { name: "linkedin-profile-200", width: 200, height: 200 },
        ],
    },
    {
        input: "social/instagram-post.svg",
        outputs: [
            { name: "instagram-post", width: 1080, height: 1080 },
            { name: "instagram-post@2x", width: 2160, height: 2160 },
        ],
    },
    {
        input: "social/og-image.svg",
        outputs: [
            { name: "og-image", width: 1200, height: 630 },
            { name: "og-image@2x", width: 2400, height: 1260 },
        ],
    },
    {
        input: "social/twitter-header.svg",
        outputs: [
            { name: "twitter-header", width: 1500, height: 500 },
            { name: "twitter-header@2x", width: 3000, height: 1000 },
        ],
    },
    {
        input: "social/twitter-profile.svg",
        outputs: [
            { name: "twitter-profile-400", width: 400, height: 400 },
            { name: "twitter-profile-200", width: 200, height: 200 },
        ],
    },
    {
        input: "social/zoom-background.svg",
        outputs: [{ name: "zoom-background", width: 1920, height: 1080 }],
    },

    // Logos
    {
        input: "logos/logo-primary.svg",
        outputs: [
            { name: "logo-primary-512", width: 512, height: 512 },
            { name: "logo-primary-256", width: 256, height: 256 },
            { name: "logo-primary-128", width: 128, height: 128 },
            { name: "logo-primary-64", width: 64, height: 64 },
        ],
    },
    {
        input: "logos/logo-icon.svg",
        outputs: [
            { name: "logo-icon-512", width: 512, height: 512 },
            { name: "logo-icon-256", width: 256, height: 256 },
            { name: "logo-icon-128", width: 128, height: 128 },
            { name: "logo-icon-64", width: 64, height: 64 },
            { name: "logo-icon-32", width: 32, height: 32 },
            { name: "logo-icon-16", width: 16, height: 16 },
        ],
    },
    {
        input: "logos/logo-light.svg",
        outputs: [
            { name: "logo-light-512", width: 512, height: 128 },
            { name: "logo-light-256", width: 256, height: 64 },
        ],
    },
    {
        input: "logos/logo-dark.svg",
        outputs: [
            { name: "logo-dark-512", width: 512, height: 128 },
            { name: "logo-dark-256", width: 256, height: 64 },
        ],
    },
    {
        input: "logos/logo-wordmark.svg",
        outputs: [
            { name: "logo-wordmark-800", width: 800, height: 200 },
            { name: "logo-wordmark-400", width: 400, height: 100 },
        ],
    },

    // Stationery
    {
        input: "stationery/business-card.svg",
        outputs: [
            { name: "business-card", width: 1020, height: 660 }, // 3x for high quality print
            { name: "business-card@2x", width: 2040, height: 1320 },
        ],
    },
    {
        input: "stationery/business-card-back.svg",
        outputs: [
            { name: "business-card-back", width: 1020, height: 660 },
            { name: "business-card-back@2x", width: 2040, height: 1320 },
        ],
    },
    {
        input: "stationery/invoice-header.svg",
        outputs: [{ name: "invoice-header", width: 1785, height: 450 }],
    },

    // Templates
    {
        input: "templates/proposal-cover.svg",
        outputs: [
            { name: "proposal-cover", width: 1190, height: 1684 }, // A4 at 2x
            { name: "proposal-cover@2x", width: 2380, height: 3368 },
        ],
    },
];

const baseDir = __dirname;
const outputDir = path.join(baseDir, "exports");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function exportSvgToPng(inputPath, outputPath, width, height) {
    try {
        const svgContent = fs.readFileSync(inputPath, "utf8");

        const resvg = new Resvg(svgContent, {
            fitTo: {
                mode: "width",
                value: width,
            },
            font: {
                loadSystemFonts: true,
            },
        });

        const pngData = resvg.render();
        const pngBuffer = pngData.asPng();

        fs.writeFileSync(outputPath, pngBuffer);
        console.log(`✓ Created: ${path.basename(outputPath)} (${width}x${height})`);
    } catch (error) {
        console.error(`✗ Failed: ${inputPath} - ${error.message}`);
    }
}

async function main() {
    console.log("🎨 SANE/REBELS PNG Export\n");
    console.log(`Output directory: ${outputDir}\n`);

    let totalExports = 0;

    for (const item of exportConfigs) {
        const inputPath = path.join(baseDir, item.input);

        if (!fs.existsSync(inputPath)) {
            console.warn(`⚠ Skipping (not found): ${item.input}`);
            continue;
        }

        console.log(`\n📁 ${item.input}`);

        for (const output of item.outputs) {
            const outputPath = path.join(outputDir, `${output.name}.png`);
            await exportSvgToPng(inputPath, outputPath, output.width, output.height);
            totalExports++;
        }
    }

    console.log(`\n✨ Done! Exported ${totalExports} PNG files to ./exports/`);
}

main().catch(console.error);
